import { Button } from "@chakra-ui/react";
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
  instructionId?: number | undefined;
  description?: string;
}

export const InstructionInput: React.FC<InstructionInputProps> = ({
  recipeId,
  position,
  original,
  edit,
  instructionId,
  description,
}) => {
  const [updateInstruction] = useUpdateInstructionMutation();
  const [createInstruction] = useCreateInstructionMutation();

  return (
    <Formik
      initialValues={{ description: description || "", position: position }}
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
      <Button type="submit">Save</Button>
    </Formik>
  );
};
