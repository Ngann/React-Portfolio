import React from 'react';
import { Link } from 'react-router-dom';

function Navigation(){
  return (
    <div>
      <h1>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newcard">Create Card</Link>
    </div>
  );
}

export default Navigation;
