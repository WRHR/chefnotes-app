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

interface RecipeModsProps {
  recipeId: number;
}

export const RecipeMods: React.FC<RecipeModsProps> = ({}) => {
  // Recipe mod query

  const modList = (query) => {
    return query.map((mod) => {
      return <ListItem>{mod}</ListItem>;
    });
  };

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
