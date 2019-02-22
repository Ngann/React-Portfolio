import React from 'react';
import PropTypes from 'prop-types';


function Contact(props){
  return (
    <div>
      <style jsx>{`
          div {
            padding: 20%;
          }
        `}</style>
      <h3>{props.name} - {props.email} - {props.phone}</h3>
      <p><em>{props.reason}</em></p>
      <hr/>
    </div>
  );
}

Contact.propTypes = {
  names: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string,
  reason: PropTypes.string
};

export default Contact;
