import { useRouter } from "next/router";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";
import { useMeQuery } from "../generated/graphql";

export default function Homepage() {
  return <Layout></Layout>;
}
