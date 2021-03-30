import React from "react";
import { Box, Button, CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { useRouter } from "next/router";
import { toErrorMap } from "../utils/toErrorMap";
interface Values {
  usernameOrEmail: string;
  password: string;
}

export const login: React.FC = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();
  return (
    <Box>
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
            {isSubmitting ? <Button>login</Button> : <CircularProgress />}
          </Form>
        )}
      </Formik>
    </Box>
  );
};
