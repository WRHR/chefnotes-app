import React, { useEffect } from "react";
import {
  AppBar,
  Button,
  IconButton,
  makeStyles,
  createStyles,
  Theme,
  Toolbar,
  Typography,
  fade,
} from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import {NextRouter} from 'next/router'
import { MeQuery, useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {
  router:NextRouter
  user:MeQuery|undefined
}

export const NavBar: React.FC<NavBarProps> = ({ router, user }) => {
  const classes = useStyles();
  const [logout, {loading: logoutFetching}] = useLogoutMutation()
  
  const apolloClient =useApolloClient()
  useEffect(()=>{
    if(!user){
      router.push('/login')
     
    }
  })

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start">
          <Menu />
        </IconButton>
        <Typography variant="h5">Chefnotes</Typography>
        <Button onClick={async ()=>{
          await logout
          await apolloClient.resetStore()
          router.push('/login')
        }}>Logout</Button>
      </Toolbar>
    </AppBar>
  );
};
