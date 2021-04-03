import React from "react";
import { useRouter } from "next/router";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import {
  Box,
  Button,
  CircularProgress,
  createStyles,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { Form, Formik } from "formik";
import { toErrorMap } from "../utils/toErrorMap";
import { InputField } from "../components/InputField";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20%",
    },
    page: {
      height: "100%",
      width: "100%",
    },
  })
);

const register: React.FC = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();
  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Formik
        initialValues={{ email: "", username: "", password: "" }}
        onSubmit={async (values, { setErrors }) => {
          const response = await register({
            variables: { options: values },
            update: (cache, { data }) => {
              cache.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  __typename: "Query",
                  me: data?.register.user,
                },
              });
            },
          });
          if (response.data?.register.errors) {
            setErrors(toErrorMap(response.data.register.errors));
          } else if (response.data?.register.user) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Box className={classes.container}>
            <Form>
              <InputField
                name="username"
                placeholder="Username"
                lable="Username"
              />
              <Box mt={4}>
                <InputField name="email" placeholder="Email" lable="Email" />
              </Box>
              <Box mt={4}>
                <InputField
                  name="password"
                  placeholder="Password"
                  lable="Password"
                  type="password"
                />
              </Box>
              {isSubmitting ? (
                <CircularProgress />
              ) : (
                <Button type="submit">register</Button>
              )}
            </Form>
            <Typography>
              Already have an account? <a href="/login">Click Here</a>
            </Typography>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
export default register;
