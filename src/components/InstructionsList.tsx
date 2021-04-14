import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { useRecipeInstructionsQuery } from "../generated/graphql";

interface InstructionsListProps {
  id: number;
  original: boolean;
}

export const InstructionsList: React.FC<InstructionsListProps> = ({
  id,
  original,
}) => {
  const { data, loading, error } = useRecipeInstructionsQuery({
    variables: {
      id,
      original,
    },
  });

  const instructionMap = data?.recipeInstructions.map((instruction) => {
    return (
      <Text>
        {instruction.position} {instruction.description}
      </Text>
    );
  });
  return <Box>{instructionMap}</Box>;
};
