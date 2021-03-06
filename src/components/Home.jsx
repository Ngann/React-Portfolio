import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeImage from '../assets/images/trees.jpeg';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FaceIcon from '@material-ui/icons/Face';
import SaveIcon from '@material-ui/icons/Save';
import EditIcon from '@material-ui/icons/Edit';
import AutoScale from 'react-auto-scale';

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
    width: '100%',
    height: 'auto',
  },
  title: {
    justify: 'center',
    textAlign: 'center',
    // border:'1px solid black',
    fontFamily: 'Georgia'
  },
  box: {
    width: '80%',
    margin: 'auto',
    color: 'white',
    // border:'1px solid black'
  },
  social: {
    width: '50%',
    margin: 'auto',
    color: 'red',
    // border:'1px solid black',
    textAlign: 'center',
  }
});

function Home(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <AutoScale>
            <div className={classes.image}>
              <div><img className={classes.pic} src={HomeImage}/></div>
            </div>
          </AutoScale>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Full Stack Developer
          </Typography>
        </Grid >
      </Grid >
      <hr/>
      <Grid container className={classes.box}>
        <Grid item xs sm={3}>
          <Typography variant="button" >
            <p className={classes.paper}>HTML/CSS</p>
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="button" gutterBottom>
            <p className={classes.paper}>JavaScript</p>
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="button" gutterBottom>
            <p className={classes.paper}>React</p>
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="button" gutterBottom>
            <p className={classes.paper}>Angular</p>
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="button" gutterBottom>
            <p className={classes.paper}>Ruby</p>
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="button" gutterBottom>
            <p className={classes.paper}>Rails</p>
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="button" gutterBottom>
            <p className={classes.paper}>Git/Github</p>
          </Typography>
        </Grid>
        <Grid item xs sm={3}>
          <Typography variant="button" gutterBottom>
            <p className={classes.paper}>Postgres</p>
          </Typography>
        </Grid>
      </Grid>

      <div>
        <div className={classes.about} />
        <section className={classes.social}>
          <IconButton color="inherit" aria-label="Edit">
            <EditIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Save">
            <SaveIcon />
          </IconButton>
          <IconButton color="inherit" aria-label="Face">
            <FaceIcon />
          </IconButton>
        </section>
      </div>
    </div>
  );
}
Home.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
