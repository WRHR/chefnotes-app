import { useRouter } from "next/router";
import { NavBar } from "../components/NavBar";
import { useMeQuery } from "../generated/graphql";

export default function Homepage(){
  const {data, loading} = useMeQuery()
  const router = useRouter()

  return (
    <div>
      <NavBar router={router} user={data}/>
    </div>
  )
}

