import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import reallyAdorablePuppy from '../assets/images/cutestpuppy.jpeg';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  pic: {
    height: '250px',
    borderRadius: '200px',
  },
  title: {
    fontSize: '40px',
    fontWeight: 'bold',
    color: 'blue',
    justify: 'center',
    textAlign: 'center',
  },
  stacks: {
    width: '50%',
    margin: 'auto',
    color: 'white',
  },
  box: {
    width: '50%',
    margin: 'auto',
    color: 'white',
  },
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className={classes.image}>
            <div><img className={classes.pic} src={reallyAdorablePuppy}/></div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography className={classes.title} variant="h4" color="inherit" noWrap>
            Web Developer
          </Typography>
        </Grid >
      </Grid >
      <Grid container className={classes.box}>
        <Grid item xs sm={3}>
          <p className={classes.paper}>HTML/CSS</p>
        </Grid>
        <Grid item xs sm={3}>
          <p className={classes.paper}>JavaScript</p>
        </Grid>
        <Grid item xs sm={3}>
          <p className={classes.paper}>React</p>
        </Grid>
        <Grid item xs sm={3}>
          <p className={classes.paper}>Angular</p>
        </Grid>
        <Grid item xs sm={3}>
          <p className={classes.paper}>Ruby</p>
        </Grid>
        <Grid item xs sm={3}>
          <p className={classes.paper}>Rails</p>
        </Grid>
        <Grid item xs sm={3}>
          <p className={classes.paper}>Git/Github</p>
        </Grid>
        <Grid item xs sm={3}>
          <p className={classes.paper}>Postgres</p>
        </Grid>
      </Grid>
    </div>
  );
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
