import { Box, Text } from "@chakra-ui/layout";
import React from "react";
import { IngredientList } from "../../components/IngredientList";
import { InstructionsList } from "../../components/InstructionsList";
import { Layout } from "../../components/Layout";
import { useGetRecipeFromUrl } from "../../utils/useGetRecipeFromUrl";

export const RecipeMod = ({}) => {
  const { data, error, loading } = useGetRecipeFromUrl();

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!data?.baseRecipe) {
    return <div>Could not find recipe</div>;
  }

  return (
    // base recipe data
    <Layout>
      <Text>{data.baseRecipe.name}</Text>
      {/* On Click Modifications Accordian?
          Add Modification
      */}
      <InstructionsList id={data.baseRecipe.id} original={true} />
      {/* Add Instruction */}
      <IngredientList id={data.baseRecipe.id} original={true} />
      {/* Add Ingredient */}
    </Layout>
  );
};
