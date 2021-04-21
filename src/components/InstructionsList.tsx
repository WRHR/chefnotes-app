import { Box, ListItem, Text } from "@chakra-ui/layout";
import { List } from "@material-ui/icons";
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
      <ListItem>
        {instruction.position} {instruction.description}
        {/* ON Click Modify options */}
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
