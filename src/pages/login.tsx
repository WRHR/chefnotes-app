import React from "react";
import { Box } from "@material-ui/core";
import { Form, Formik } from "formik";
import { MeQuery, useLoginMutation } from "../generated/graphql";

interface Values {
  usernameOrEmail: string;
  password: string;
}

export const login: React.FC = ({}) => {
  const [login] = useLoginMutation()
  return (
    <Box>
      <Formik
        initialValues={{
          usernameOrEmail: "",
          password: "",
        }}
        onSubmit={async (values, {setErrors}) =>{
            const response = await login({
                variables:values
                
                }
            })
        }}
      >
          {({isSubmitting}) =>(

        <Form>
            
        </Form>
          )}
      </Formik>
    </Box>
  );
};
