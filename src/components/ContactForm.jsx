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
  let _name = null;
  let _email = null;
  let _phone = null;
  let _reason = null;
  
  function handleNewContactFormSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    _name.value ='';
    _email.value ='';
    _phone.value ='';
    _reason.value ='';
  }

  return (
    <div className={classes.root}>
      <form >
      <input
          type='text'
          id='name'
          placeholder='First and Lastname'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='email'
          placeholder='Email'
          ref={(input) => {_email = input;}}/>
          <input
            type='text'
            id='phone'
            placeholder='Phone'
            ref={(input) => {_phone = input;}}/>
        <textarea
          id='reason'
          placeholder='Tell me a little about what projects you would liek to create.'
          ref={(input) => {_reason = input;}}/>
        <button onClick={props.onSendForm} type='submit'>Send</button>
      </form>
    </div>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
    onSendForm: PropTypes.func,
};

export default withStyles(styles)(ContactForm);
