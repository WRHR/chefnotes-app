import { Button } from "@chakra-ui/button";
import { Link, List, ListItem } from "@chakra-ui/layout";
import { Layout } from "../components/Layout";
import { useUserBaseRecipesQuery } from "../generated/graphql";

export default function Homepage() {
  const { data, loading, error } = useUserBaseRecipesQuery();
  const userRecipesMap = data?.userBaseRecipes.map((recipe) => {
    return (
      <ListItem>
        <Link href={`/recipe/${recipe.id}`}>{recipe.name}</Link>
      </ListItem>
    );
  });

  return (
    <Layout>
      {/* Search bar */}
      <List>{userRecipesMap}</List>

      <Link href="/recipe/NewRecipe">Add a Recipe</Link>
    </Layout>
  );
}
