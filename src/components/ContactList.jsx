import React from 'react';
import Contact from './Contact';
import PropTypes from 'prop-types';

function ContactList(props){
  return (
    <div>
      <hr/>
      {props.contactList.map((contact) =>
        <Contact names={contact.name}
          email={contact.email}
          phone={contact.phone}
          reason={contact.reason}
          // key={index}
          />
      )}
    </div>
  );
}

ContactList.propTypes = {
  contactList: PropTypes.array
}

export default ContactList;