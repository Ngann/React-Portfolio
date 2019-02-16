import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import HomeImage from '../assets/images/home.jpeg';
import Typography from '@material-ui/core/Typography';
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
    width: '100%'
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

function Resume(props) {
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
            Resume
          </Typography>
        </Grid >
      </Grid >
      <hr/>
      <Grid container className={classes.box}>
        <Grid item xs={24}>
          <Typography variant="body2"  >
            <p className={classes.paper}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
Resume.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Resume);
