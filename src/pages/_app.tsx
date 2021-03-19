import { Box } from "@material-ui/core";
import { useState } from "react";
import { NavBar } from "../components/NavBar";
import { RecipeCard } from "../components/RecipeCard";

function App({Component, pageProps}:any) {
  return (
    <div className="App">
      <Component {...pageProps} />
    </div>
  );
}

export default App;
