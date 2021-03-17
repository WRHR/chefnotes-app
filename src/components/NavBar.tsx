import React from 'react'
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'

interface NavBarProps {

}

export const NavBar: React.FC<NavBarProps> = ({}) => {
    return (
      <AppBar position='static'>
        <Toolbar>
          <IconButton edge='start' >

          </IconButton>
          <Typography variant='h5' >ChefNotes</Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
    );
}