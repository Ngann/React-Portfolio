import React from 'react';
import PropTypes from 'prop-types';

function Project(props){
  return (
    <div>
      <style jsx>{`
          div {
            margin: 5%;
            background-color: lightgrey;
            border: 1px solid black;
            padding: 2%;
          }
        `}</style>
      <h3>{props.location} - {props.names}</h3>
      <p><em>{props.issue}</em></p>
      <hr/>
    </div>
  );
}

Project.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string
};

export default Project;
