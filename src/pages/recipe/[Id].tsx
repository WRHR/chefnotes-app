import { Text } from "@chakra-ui/layout";
import React from "react";
import { IngredientList } from "../../components/IngredientList";
import { InstructionsList } from "../../components/InstructionsList";
import { Layout } from "../../components/Layout";
import { RecipeMods } from "../../components/RecipeMods";
import { useGetRecipeFromUrl } from "../../utils/useGetRecipeFromUrl";

export const Recipe = ({}) => {
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
    <Layout>
      <Text>{data.baseRecipe.name}</Text>
      <RecipeMods recipeId={data.baseRecipe.id} />
      <IngredientList id={data.baseRecipe.id} original={true} />
      <InstructionsList id={data.baseRecipe.id} original={true} />
    </Layout>
  );
};
