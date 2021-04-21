import { Box, List, ListItem, Text } from '@chakra-ui/layout';
import React from 'react'
import { useRecipeIngredientsQuery } from '../generated/graphql';

interface IngredientListProps {
  id:number
  original:boolean
}

export const IngredientList: React.FC<IngredientListProps> = ({id, original}) => {
  const {data, loading, error} = useRecipeIngredientsQuery({variables:{id, original}})

  const ingregientMap = data?.recipeIngredients.map((ingredient)=>{
    return(
      <ListItem>
        {ingredient.quantity} {ingredient.name}
        {/* on click modify options */}
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