import React from "react";
import { Box } from "@material-ui/core";
import { Form, Formik } from "formik";
import { useLoginMutation } from "../generated/graphql";

interface Values {
  usernameOrEmail: string;
  password: string;
}

export const login: React.FC = ({}) => {
  return (
    <Box>
      <Formik
        initialValues={{
          usernameOrEmail: "",
          password: "",
        }}
        onSubmit={(values:Values, useLoginMutation())}
      >
        <Form></Form>
      </Formik>
    </Box>
  );
};
