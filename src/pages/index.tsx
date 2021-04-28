import { Button } from "@chakra-ui/button";
import { Link } from "@chakra-ui/layout";
import { Layout } from "../components/Layout";

export default function Homepage() {
  return <Layout>
    {/* Search bar */}
    {/* User Recipe list */}
    {/* New recipe */}
    <Link href='/recipe/NewRecipe'>Add a Recipe</Link>
  </Layout>;
}
