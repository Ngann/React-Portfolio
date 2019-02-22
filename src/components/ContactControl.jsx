import React from 'react';
import ContactConfirmation from './ContactConfirmation';
import ContactForm from './ContactForm';
import PropTypes from "prop-types";

class ContactControl extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      formVisibleOnPage: true,
    };
    this.showForm = this.sendForm.bind(this);
  }

  sendForm() {
    this.setState({formVisibleOnPage:false});
    // console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <ContactForm onNewContactCreation={this.props.onNewContactCreation}/>;
    } else {
      currentlyVisibleContent = <ContactConfirmation />;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

ContactControl.propTypes = {
  onNewContactCreation: PropTypes.func
};

export default ContactControl;
