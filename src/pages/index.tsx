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

  return (
    <Layout>
      <SearchBar recipes={data?.userBaseRecipes}/>
      <List>{userRecipesMap}</List>

      <Link href="/recipe/NewRecipe">Add a Recipe</Link>
    </Layout>
  );
}
