import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import AutoScale from 'react-auto-scale';
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

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

function ContactForm(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography variant="h2" gutterBottom className={classes.title}>
            Contact
          </Typography>
        </Grid >
      </Grid >
      <hr/>
      <Grid container className={classes.box}>
        <Grid item xs={24}>
          <form className={classes.container} noValidate autoComplete="off" onSubmit={handleNewTicketFormSubmission}>
            <TextField
              id="filled-name"
              label="Name"
              className={classes.textField}
              value=""
              margin="normal"
              variant="filled"
            />

            <TextField
              required
              id="filled-email-input"
              label="Email"
              className={classes.textField}
              type="email"
              name="email"
              autoComplete="email"
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-number"
              label="Number"
              value=" "
              type="number"
              className={classes.textField}
              InputLabelProps=" "
              margin="normal"
              variant="filled"
            />

            <TextField
              id="filled-multiline-static"
              label="Message"
              multiline
              rows="4"
              defaultValue=" "
              className={classes.textField}
              margin="normal"
              variant="filled"
            />
            <button type='submit'>Send</button>
          </form>
        </Grid>
      </Grid>
    </div>
  );
}
ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSendForm: PropTypes.func,
};

export default withStyles(styles)(Resume);
