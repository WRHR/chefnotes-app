import React from "react";
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
import {useRouter} from 'next/router'
import { useLogoutMutation, useMeQuery } from "../generated/graphql";
import { useApolloClient } from "@apollo/client";

interface NavBarProps {
  // user: {
  //   username: string;
  // };
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);

export const NavBar: React.FC<NavBarProps> = ({  }) => {
  const classes = useStyles();
  const router = useRouter()
  const [logout, {loading: logoutFetching}] = useLogoutMutation()
  const {data, loading} = useMeQuery()
  const apolloClient =useApolloClient()

  if(!data){
    router.push('/login')
  }
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
