import { Box } from '@chakra-ui/layout';
import React from 'react'
import { useRecipeIngredientsQuery, useRecipeInstructionsQuery } from '../../generated/graphql';
import { useGetRecipeFromUrl } from '../../utils/useGetRecipeFromUrl';



export const Recipe = ({}) => {
  const {data, error, loading} = useGetRecipeFromUrl()
  
  if(loading){
    return (<div>loading...</div>)
  }

  if(error){
    return <div>{error.message}</div>
  }

  if(!data?.baseRecipe){
    return(
      <div>Could not find recipe</div>
    )
  }

  if(data.baseRecipe){
    let baseOptions = {
      id:data.baseRecipe.id,
      original:true
    }
    const {data, loading, error} = useRecipeIngredientsQuery()
  }
    return (
      // base recipe data
      <Box>
        <Text>{data.baseRecipe.name}</Text>
      </Box>
    );
}