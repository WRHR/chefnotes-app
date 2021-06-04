import { Button } from "@chakra-ui/button";
import { Link, List, ListItem } from "@chakra-ui/layout";
import { Layout } from "../components/Layout";
import { RecipeCard } from "../components/RecipeCard";
import { SearchBar } from "../components/SearchBar";
import { useUserBaseRecipesQuery } from "../generated/graphql";

export default function Homepage() {
  const { data, loading, error } = useUserBaseRecipesQuery();
  const userRecipesMap = data?.userBaseRecipes.map((recipe) => {
    return (
      <ListItem>
        <RecipeCard recipe={recipe} />
      </ListItem>
    );
  });

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>There was an error loading your recipes</div>;
  }

  return (
    <Layout>
      <SearchBar recipes={data?.userBaseRecipes} />
      <List>{userRecipesMap}</List>
      <Button as="link" href="/recipe/NewRecipe">
        Add a Recipe
      </Button>
    </Layout>
  );
}
