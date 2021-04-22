import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";

interface RecipeCardProps {}

export const RecipeCard: React.FC<RecipeCardProps> = ({}) => {
  return (
    <Flex flexDir="column">
      <Text>Recipe Name</Text>
      <Text>Recipe decription</Text>

      <Button>View Recipe</Button>
    </Flex>
  );
};
