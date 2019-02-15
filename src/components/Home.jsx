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
    backgroundColor: 'lightblue',
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
    paddingTop: '150px',
    height: '250px',
  },
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Paper className={classes.image}>
          <div><img className={classes.pic} src={reallyAdorablePuppy}/></div>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Web Developer
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Frameworks
          </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Languages
          </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
