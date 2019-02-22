import React from 'react';
import ContactConfirmation from './ContactConfirmation';
import ContactForm from './ContactForm';

class ContactControl extends React.Component {
  
  constructor(props) {
    super(props);
    this.state ={
      formVisibleOnPage: true
    };
    this.showForm = this.sendForm.bind(this);
  }
  
  sendForm() {
    this.setState({formVisibleOnPage:false});
    console.log('formVisibleOnPage is currently set to:' + this.state.formVisibleOnPage);
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <ContactForm onSendForm={this.showForm}/>;
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

export default ContactControl;