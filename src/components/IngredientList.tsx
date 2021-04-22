import { Box, List, ListItem, Text } from '@chakra-ui/layout';
import React, { useState } from 'react'
import { useRecipeIngredientsQuery } from '../generated/graphql';

interface IngredientListProps {
  id:number
  original:boolean
}

export const IngredientList: React.FC<IngredientListProps> = ({id, original}) => {
  const {data, loading, error} = useRecipeIngredientsQuery({variables:{id, original}})
  const [selectedIngredient, useSelectedIngredient] = useState(0)

  const ingregientMap = data?.recipeIngredients.map((ingredient)=>{
    return(
      <ListItem onClick={()=>useSelectedIngredient(ingredient.id)}>
        {ingredient.quantity} {ingredient.name}
        {/* on click modify options */}
        {selectedIngredient===ingredient.id?<Box>Edit options</Box>:null}
        </ListItem>
    )
  })
    return (
      <Box>
        <Text>Ingredients</Text>
        <List>
          {ingregientMap}
        </List>
      </Box>
    );
}