import { Box } from "@material-ui/core";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { RecipeCard } from "../components/RecipeCard";

function App() {
  // const [user, setUser] = useState()
  // homepage
  // cookbook
  // add recipe
  //modify existing recipe
  // search your recipes
  return (
    <div className="App">
      <NavBar />
      <Box>
        <RecipeCard />
      </Box>
    </div>
  );
}

export default App;
