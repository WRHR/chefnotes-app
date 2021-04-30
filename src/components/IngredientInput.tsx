import { Button } from "@chakra-ui/react";
import { Formik } from "formik";
import React from "react";
import {
  useCreateIngredientMutation,
  useUpdateIngredientMutation,
} from "../generated/graphql";
import { InputField } from "./InputField";

interface InstructionInputProps {
  recipeId: number;
  quantity?: number;
  original: boolean;
  edit: boolean;
  ingredientId?: number | undefined;
  name?: string;
  measurement?: string;
}

export const InstructionInput: React.FC<InstructionInputProps> = ({
  recipeId,
  quantity,
  original,
  edit,
  ingredientId,
  name,
  measurement,
}) => {
  const [updateIngredient] = useUpdateIngredientMutation();
  const [createIngredient] = useCreateIngredientMutation();

  return (
    <Formik
      initialValues={{
        name: name || "",
        quantity: quantity || 1,
        measurement: measurement || "",
      }}
      onSubmit={async (values) => {
        if (edit && ingredientId) {
          const { errors } = await updateIngredient({
            variables: { id: ingredientId, input: values },
          });
        } else {
          const { errors } = await createIngredient({
            variables: { input: values, original, recipeId },
          });
        }
      }}
    >
      <InputField
        name="quantity"
        label="quantity"
        placeholder="Add amount of ingredient"
      />
      <InputField
        name="measurement"
        label="measurement"
        placeholder="Add the measurement or the ingredient"
      />
      <InputField
        name="name"
        label="name"
        placeholder="Add the name of the ingredient"
      />
      <Button type="submit">Save</Button>
    </Formik>
  );
};
