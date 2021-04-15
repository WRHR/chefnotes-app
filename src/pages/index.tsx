import { useRouter } from "next/router";
import { NavBar } from "../components/NavBar";
import { useMeQuery } from "../generated/graphql";

export default function Homepage(){


  return (
    <div>
      <NavBar />
    </div>
  )
}

