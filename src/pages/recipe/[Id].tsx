import { Box } from '@chakra-ui/layout';
import React from 'react'
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
    return (
      // base recipe data
      <Box>
        <Text>{data.baseRecipe.name}</Text>
      </Box>
    );
}