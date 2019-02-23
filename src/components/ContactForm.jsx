import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Typography from '@material-ui/core/Typography';
// import AutoScale from 'react-auto-scale';
// import classNames from 'classnames';
// import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:'lightyellow',
  },
  container: {
    width: '60%',
    margin: 'auto',
    border:'1px solid black'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
  },
  box: {
    width: '60%',
    margin: 'auto',
    border:'1px solid black'
  },
});

function ContactForm(props) {
  const { classes } = props;
  let _name = null;
  let _email = null;
  let _phone = null;
  let _reason = null;

  function handleNewContactFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    props.onNewContactCreation({name: _name.value, email: _email.value, phone: _phone.value, reason: _reason.value});
    _name.value ='';
    _email.value ='';
    _phone.value ='';
    _reason.value ='';
  }

  return (
    <div className={classes.root}>
      <Grid className={classes.box} >
        <p>Thanks for reaching out!</p>
        <form className={classes.container} onSubmit={handleNewContactFormSubmission}>
          <Grid item xs={12}>
            <input className={classes.textField}
              type='text'
              id='name'
              placeholder='Name'
              ref={(input) => {_name = input;}}/>
          </Grid>
          <Grid item xs={12}>
            <input className={classes.textField}
              type='text'
              id='email'
              placeholder='Email'
              ref={(input) => {_email = input;}}/>
          </Grid>
          <Grid item xs={12}>
            <input className={classes.textField}
              type='text'
              id='phone'
              placeholder='Phone'
              ref={(input) => {_phone = input;}}/>
          </Grid>
          <Grid item xs={12}>
            <textarea className={classes.textField}
              id='reason'
              placeholder='Tell me a little about what projects you would liek to create.'
              ref={(input) => {_reason = input;}}/>
          </Grid>
          <button className={classes.button} type='submit'>Send</button>
        </form>
      </Grid>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onNewContactCreation: PropTypes.func,
};

export default withStyles(styles)(ContactForm);
