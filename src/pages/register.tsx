import React from "react";
import { useRouter } from "next/router";
import { MeDocument, MeQuery, useRegisterMutation } from "../generated/graphql";
import { Box, Flex, Button, Text, Center } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { toErrorMap } from "../utils/toErrorMap";
import { InputField } from "../components/InputField";
import { Heading } from "../components/Heading";
import {colors} from '../theme/colors'

const register: React.FC = ({}) => {
  const router = useRouter();
  const [register] = useRegisterMutation();

  return (
    <Center backgroundColor={colors['secondary']}>
      <Box maxW="500px">
        <Heading />
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
            <Flex flexDir="column">
              <Form>
                <InputField
                  name="username"
                  placeholder="Username"
                  label="Username"
                />
                <Box mt={4}>
                  <InputField name="email" placeholder="Email" label="Email" />
                </Box>
                <Box mt={4}>
                  <InputField
                    name="password"
                    placeholder="Password"
                    label="Password"
                    type="password"
                  />
                </Box>
                <Button type="submit" isLoading={isSubmitting}>
                  register
                </Button>
              </Form>
              <Text>
                Already have an account? <a href="/login">Click Here</a>
              </Text>
            </Flex>
          )}
        </Formik>
      </Box>
    </Center>
  );
};
export default register;
