import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import reallyAdorablePuppy from '../assets/images/cutestpuppy.jpeg';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Resume from './Resume';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // border:'1px solid black'
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
  },
  bigAvatar: {
    margin: 'auto',
    width: '50%',
    height: 'auto',
  },
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Resume/>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <div className={classes.image}>
            <Avatar alt="Remy Sharp" src={reallyAdorablePuppy} className={classes.bigAvatar} />
          </div>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            About
          </Typography>
        </Grid >
      </Grid >
      <hr/>
      <Grid container className={classes.box}>
        <Grid item xs={24}>
          <Typography variant="body2" >
            <p className={classes.paper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);
