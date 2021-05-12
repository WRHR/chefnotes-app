import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
  List,
  ListItem,
} from "@chakra-ui/react";
import { useFindRecipeModsQuery } from "../generated/graphql";

interface RecipeModsProps {
  recipeId: number;
}

export const RecipeMods: React.FC<RecipeModsProps> = ({ recipeId }) => {

  const {data, loading, error} = useFindRecipeModsQuery({ variables: { baseRecipeId: recipeId } });

  const modList = data?.findRecipeMods.map()

  return (
    <Accordion>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              Recipe Modifications
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <List>{modList}</List>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
