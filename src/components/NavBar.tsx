import React, { useEffect } from "react";
import { Box, Button, Flex, Center, Text } from "@chakra-ui/react";
import { Menu } from "@material-ui/icons";
import { NextRouter } from "next/router";
import { MeQuery, useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {
  router: NextRouter;
  user: MeQuery | undefined;
}

export const NavBar: React.FC<NavBarProps> = ({ router, user }) => {
  const [logout, { loading: logoutFetching }] = useLogoutMutation();

  const apolloClient = useApolloClient();
  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  });

  return (
    <Flex>
      <Center>
        <Text>Chefnotes</Text>
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
