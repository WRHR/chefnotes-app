import { useState } from "react";
import { NavBar } from "./components/NavBar";

function App() {
  const [user, setUser] = useState()
  // homepage
  // cookbook
  // add recipe
  //modify existing recipe
  // search your recipes
  return (
    <div className="App">
      <NavBar user={user}/>
    </div>
  );
}

export default App;
