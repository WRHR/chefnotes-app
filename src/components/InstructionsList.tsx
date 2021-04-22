import { Box, ListItem, Text } from "@chakra-ui/layout";
import { List } from "@material-ui/icons";
import React, { useState } from "react";
import { useRecipeInstructionsQuery } from "../generated/graphql";

interface InstructionsListProps {
  id: number;
  original: boolean;
}

export const InstructionsList: React.FC<InstructionsListProps> = ({
  id,
  original,
}) => {
  const [selectedInstruction, useSelectedInstruction] = useState(0)
  const { data, loading, error } = useRecipeInstructionsQuery({
    variables: {
      id,
      original,
    },
  });

  const instructionMap = data?.recipeInstructions.map((instruction) => {
    return (
      <ListItem onClick={()=>useSelectedInstruction(instruction.id)}>
        {instruction.position} {instruction.description}
        {/* ON Click Modify options */}
        {selectedInstruction===instruction.id ? <Box>Edit Options</Box>:null}
      </ListItem>
    );
  });
  return (
    <Box>
      <Text>Instructions</Text>
      <List>{instructionMap}</List>
    </Box>
  );
};
