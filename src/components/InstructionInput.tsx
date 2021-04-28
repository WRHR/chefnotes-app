import { Formik } from "formik";
import React from "react";
import { useCreateInstructionMutation } from "../generated/graphql";
import { InputField } from "./InputField";

interface InstructionInputProps {
  recipeId: number;
  position: number;
  original: boolean;
}

export const InstructionInput: React.FC<InstructionInputProps> = ({
  recipeId,
  position,
  original,
}) => {
  const [createInstruction] = useCreateInstructionMutation();
  return (
    <Formik
      initialValues={{ description: "", position: position }}
      onSubmit={async (values) => {
        const { errors } = await createInstruction({
          variables: { input: values, original, recipeId },
        });
      }}
    >
      <InputField
        name="description"
        label="description"
        placeholder="Add an instruction for this recipe"
      />
    </Formik>
  );
};
