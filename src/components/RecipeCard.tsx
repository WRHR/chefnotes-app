import React from "react";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { BaseRecipe } from "../generated/graphql";

interface RecipeCardProps {
  recipe: { __typename?: "BaseRecipe" | undefined } & Pick<
    BaseRecipe,
    "id" | "description" | "name"
  >;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Flex flexDir="column">
      <Text>{recipe.name}</Text>
      <Text>{recipe.description}</Text>

      <Button as="link" href={`/recipe/${recipe.id}`}>
        View Recipe
      </Button>
    </Flex>
  );
};
