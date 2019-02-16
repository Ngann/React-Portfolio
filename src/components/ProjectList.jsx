import React from 'react';
import Project from './Project';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  image: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    border:'1px solid black'
  },
  title: {
    justify: 'center',
    textAlign: 'center',
    border:'1px solid black'
  },
});

var masterProjectList = [
  {
    names: 'JavaScipt/React',
    location: 'Portfolio',
    issue: 'Firebase won\'t save record. Halp.'
  },
  {
    names: 'TypeScript/Angular',
    location: 'Social Media',
    issue: 'Fox image not displaying on page, can only see duck?'
  },
  {
    names: 'Ruby/Rails/Postgres',
    location: 'BattleShip',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  },
  {
    names: 'JavaScipt/Firebase',
    location: 'Other',
    issue: 'Donkey picture not displaying on hover in Zoology app. :('
  }
];

function ProjectList(props){
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Typography variant="h2" gutterBottom className={classes.title}>
          Projects
        </Typography>
      </Grid >
      <hr/>
      <Grid container spacing={12}>
      {masterProjectList.map((ticket, index) =>
        <Grid xs={6} s={4}>
          <Project names={ticket.names}
            location={ticket.location}
            issue={ticket.issue}
            key={index}/>
        </Grid>
      )}
      </Grid>
    </div>
  );
}

ProjectList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProjectList);
