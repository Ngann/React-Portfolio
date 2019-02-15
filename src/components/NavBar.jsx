import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
<<<<<<< HEAD
=======
import Button from '@material-ui/core/Button';
>>>>>>> 843a299ee35ca6bc7cb3df56577568164bda2e62

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
<<<<<<< HEAD
=======
          <Button variant="contained" color="primary">
           Hello World
         </Button>
>>>>>>> 843a299ee35ca6bc7cb3df56577568164bda2e62
          <Typography variant="title" color="inherit">
            Navigation Bar using Materil UI
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
