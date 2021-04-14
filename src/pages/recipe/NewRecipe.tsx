import React from "react";
import { Formik, Form } from "formik";
import { Box, Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useCreateBaseRecipeMutation } from "../../generated/graphql";
import { InputField } from "../../components/InputField";

interface NewRecipeProps {}

export const NewRecipe: React.FC<NewRecipeProps> = ({}) => {
  const router = useRouter();
  const [createRecipe] = useCreateBaseRecipeMutation()
  return (
    <Box>
      <Formik
        initialValues={{ name: "", description: "" }}
        onSubmit={async (values) => {
          const { errors } = await createRecipe({
            variables: { input: values },
          });
          if (!errors) {
            router.push("/");
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <InputField
              name="name"
              placeholder="Recipe Name"
              label="Recipe Name"
            />
            <Box>
              <InputField
                name="description"
                placeholder="Recipe Description"
                label="Recipe Description"
              />
            </Box>
            <Button type="submit" isLoading={isSubmitting}>
              Create Recipe
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
};
