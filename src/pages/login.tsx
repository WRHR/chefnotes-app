import React from "react";
import {
  Box,
  Button,
  CircularProgress,
  createStyles,
  makeStyles,
  Paper,
  Theme,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { useRouter } from "next/router";
import { toErrorMap } from "../utils/toErrorMap";

interface Values {
  usernameOrEmail: string;
  password: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems:'center',
      marginTop:"20%"      
    },
    page:{
      height:'100vh',
      width:'100vw',

    }
  })
);

const login: React.FC = ({}) => {
  const classes = useStyles();
  const router = useRouter();
  const [login] = useLoginMutation();
  return (
    <Box className={classes.page}>
      <Formik
        initialValues={{
          usernameOrEmail: "",
          password: "",
        }}
        onSubmit={async (values, { setErrors }) => {
          const response = await login({
            variables: values,
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.login.user,
                },
              });
            },
          });
          if (response.data?.login.errors) {
            setErrors(toErrorMap(response.data.login.errors));
          } else if (response.data?.login.user) {
            if (typeof router.query.next === "string") {
              router.push(router.query.next);
            } else {
              router.push("/");
            }
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Box className={classes.container}>
              <InputField
                lable="Username or Email"
                name="usernameOrEmail"
                placeholder="Username or Email"
              />
              <InputField
                name="password"
                lable="Password"
                type="password"
                placeholder="Password"
              />
              {isSubmitting ? <CircularProgress /> : <Button type='submit'>login</Button>}
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default login;
