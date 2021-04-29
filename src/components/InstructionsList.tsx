import { Box, Flex, ListItem, OrderedList, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useRecipeInstructionsQuery } from "../generated/graphql";
import { EditPanel } from "./EditPanel";
import { InstructionInput } from "./InstructionInput";

interface InstructionsListProps {
  id: number;
  original: boolean;
}

export const InstructionsList: React.FC<InstructionsListProps> = ({
  id,
  original,
}) => {
  const [selectedInstruction, useSelectedInstruction] = useState(0);
  const [editMode, setEditMode] = useState(0);
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
        editMode !=instruction.id ?
        <ListItem onClick={() => useSelectedInstruction(instruction.id)}>
          <Flex justifyContent="space-between">
            {instruction.description}
            {/* ON Click Modify options */}
            {selectedInstruction === instruction.id ? (
              <EditPanel setEditMode={setEditMode} id={instruction.id}/>
            ) : null}
          </Flex>
        </ListItem>
        : <InstructionInput 
            instructionId={instruction.id}
            edit={true}
            original={true}
            recipeId={id}
            position={instruction.position}
        />
      );
    });
  return (
    <Box>
      <Text>Instructions</Text>
      <OrderedList>{instructionMap}</OrderedList>
    </Box>
  );
};
