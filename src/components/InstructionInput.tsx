import { Formik } from "formik";
import React from "react";
import {
  useCreateInstructionMutation,
  useUpdateInstructionMutation,
} from "../generated/graphql";
import { InputField } from "./InputField";

interface InstructionInputProps {
  recipeId: number;
  position: number;
  original: boolean;
  edit: boolean;
  instructionId?: number;
}

export const InstructionInput: React.FC<InstructionInputProps> = ({
  recipeId,
  position,
  original,
  edit,
  instructionId,
}) => {
  const [updateInstruction] = useUpdateInstructionMutation();
  const [createInstruction] = useCreateInstructionMutation();

  return (
    <Formik
      initialValues={{ description: "", position: position }}
      onSubmit={async (values) => {
        if (edit && instructionId) {
          const { errors } = await updateInstruction({
            variables: { id: instructionId, input: values },
          });
        } else {
          const { errors } = await createInstruction({
            variables: { input: values, original, recipeId },
          });
        }
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
