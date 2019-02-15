import React from 'react';
import NavBar from './NavBar';
import ProjectList from './ProjectList';
import { Switch, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import Types from './ImageExample';
import Error404 from './Error404';



function App(){
  return (
    <div>
      <NavBar/>
      <Types/>
      <Switch>
        <Route exact path='/' component={ProjectList} />
        <Route path='/newcard' component={ContactForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
