import React from "react";
import {
  Box,
  Button,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from "@chakra-ui/react";
import { BaseRecipe } from "../generated/graphql";

interface RecipeCardProps {
  recipe: { __typename?: "BaseRecipe" | undefined } & Pick<
    BaseRecipe,
    "id" | "description" | "name"
  >;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({ recipe }) => {
  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              {recipe.name}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Text>{recipe.description}</Text>
          <Button as="link" href={`/recipe/${recipe.id}`}>
            View Recipe
          </Button>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
