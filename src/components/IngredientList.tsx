import { Box, List, ListItem, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { useRecipeIngredientsQuery } from "../generated/graphql";
import { EditPanel } from "./EditPanel";
import { IngredientInput } from "./IngredientInput";

interface IngredientListProps {
  id: number;
  original: boolean;
}

export const IngredientList: React.FC<IngredientListProps> = ({
  id,
  original,
}) => {
  const { data, loading, error } = useRecipeIngredientsQuery({
    variables: { id, original },
  });
  const [selectedIngredient, setSelectedIngredient] = useState(0);
  const [editMode, setEditMode] = useState(0);
  const [addIngredient, setAddIngredient] = useState(false);

  const ingregientMap = data?.recipeIngredients.map((ingredient) => {
    return (
      <ListItem onClick={() => setSelectedIngredient(ingredient.id)}>
        {ingredient.quantity} {ingredient.name}
        {/* on click modify options */}
        {selectedIngredient === ingredient.id ? (
          <EditPanel id={ingredient.id} setEditMode={setEditMode} />
        ) : null}
      </ListItem>
    );
  });
  return (
    <Box>
      <Text>Ingredients</Text>
      <List>{ingregientMap}</List>
      {addIngredient ? (
        <IngredientInput recipeId={id} original={original} edit={false} />
      ) : (
        <Box as="button" onClick={() => setAddIngredient(true)}>
          Add Ingredient
        </Box>
      )}
    </Box>
  );
};
