import React from "react";
import { Box, Flex, Text, Button } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { MeDocument, MeQuery, useLoginMutation } from "../generated/graphql";
import { InputField } from "../components/InputField";
import { useRouter } from "next/router";
import { toErrorMap } from "../utils/toErrorMap";
import { Heading } from "../components/Heading";

interface Values {
  usernameOrEmail: string;
  password: string;
}

const login: React.FC = ({}) => {
  const router = useRouter();
  const [login] = useLoginMutation();
  return (
    <Box>
      <Heading />
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
            <Flex flexDir='column' >
              <InputField
                label="Username or Email"
                name="usernameOrEmail"
                placeholder="Username or Email"
              />
              <InputField
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
              />
              <Button
                type='submit'
                isLoading={isSubmitting}
              >
                login
              </Button>
              <Text>
                Need an account? <a href="/register">Click Here</a>
              </Text>
            </Flex>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default login;
