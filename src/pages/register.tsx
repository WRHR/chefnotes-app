import React from "react";
import { useRouter } from "next/router";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { Box, Button, CircularProgress } from "@material-ui/core";
import { Form, Formik } from "formik";
import { toErrorMap } from "../utils/toErrorMap";
import { InputField } from "../components/InputField";
export const register: React.FC = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <Box>
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
              <Button type="submit">register</Button>
            ) : (
              <CircularProgress />
            )}
          </Form>
        )}
      </Formik>
    </Box>
  );
};
