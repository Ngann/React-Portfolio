import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

function ContactList(props){
  return (
    <div>
      <hr/>
      {props.contactList.map((contact) =>
        <Contact name={contact.name}
          email={contact.email}
          phone={contact.phone}
          reason={contact.reason}
          />
      )}
    </div>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.array
}

export default ContactList;
