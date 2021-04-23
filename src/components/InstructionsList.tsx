import { Box, Flex, ListItem, OrderedList, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useRecipeInstructionsQuery } from "../generated/graphql";
import { EditPanel } from "./EditPanel";

interface InstructionsListProps {
  id: number;
  original: boolean;
}

export const InstructionsList: React.FC<InstructionsListProps> = ({
  id,
  original,
}) => {
  const [selectedInstruction, useSelectedInstruction] = useState(0);
  const { data, loading, error } = useRecipeInstructionsQuery({
    variables: {
      id,
      original,
    },
  });

  const instructionMap = data?.recipeInstructions
    .sort((a, b) => a.position - b.position)
    .map((instruction) => {
      return (
        <ListItem onClick={() => useSelectedInstruction(instruction.id)}>
          <Flex justifyContent="space-between">
            {instruction.description}
            {/* ON Click Modify options */}
            {selectedInstruction === instruction.id ? (
              <EditPanel />
            ) : null}
          </Flex>
        </ListItem>
      );
    });
  return (
    <Box>
      <Text>Instructions</Text>
      <OrderedList>{instructionMap}</OrderedList>
    </Box>
  );
};
