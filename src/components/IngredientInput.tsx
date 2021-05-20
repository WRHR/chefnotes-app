import { Button, Flex } from "@chakra-ui/react";
import { Formik } from "formik";
import React from "react";
import {
  useCreateIngredientMutation,
  useUpdateIngredientMutation,
} from "../generated/graphql";
import { InputField } from "./InputField";

interface IngredientInputProps {
  recipeId: number;
  quantity?: number;
  original: boolean;
  edit: boolean;
  ingredientId?: number | undefined;
  name?: string;
  measurement?: string;
  setEditMode?: Function;
  setAddIngredient?: Function;
}

export const IngredientInput: React.FC<IngredientInputProps> = ({
  recipeId,
  quantity,
  original,
  edit,
  ingredientId,
  name,
  measurement,
  setEditMode,
  setAddIngredient,
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
        if (edit && ingredientId && setEditMode) {
          const { errors } = await updateIngredient({
            variables: { id: ingredientId, input: values },
          });
          setEditMode(0);
        }
        if (setAddIngredient) {
          const { errors } = await createIngredient({
            variables: { input: values, original, recipeId },
          });
          setAddIngredient(false);
        }
      }}
    >
      <Flex>
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
      </Flex>
    </Formik>
  );
};
