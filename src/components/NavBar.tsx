import React, { useEffect } from "react";
import { Box, Button, Flex, Center, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { MeQuery, useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {
 
}

export const NavBar: React.FC<NavBarProps> = ({ }) => {
  const [logout, { loading: logoutFetching }] = useLogoutMutation();
  const {data, loading} = useMeQuery()
  const router = useRouter()

  const apolloClient = useApolloClient();
  useEffect(() => {
    if (!data?.me) {
      router.push("/login");
    }
  });

  return (
    <Flex>
      <Center>
        <Text><a href='/'>Chefnotes</a></Text>
      </Center>
      <Button
        onClick={async () => {
          await logout;
          await apolloClient.resetStore();
          router.push("/login");
        }}
      >
        Logout
      </Button>
    </Flex>
  );
};
