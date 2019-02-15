import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Button variant="contained" color="primary">
           Hello World
         </Button>
          <Typography variant="title" color="inherit">
            Navigation Bar using Materil UI
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
