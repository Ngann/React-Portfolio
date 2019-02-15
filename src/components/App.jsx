import React from 'react';
import NavBar from './NavBar';
import Header from './Header';
import Resume from './Resume';
import Contact from './Contact';
import About from './About';
import Navigation from './Navigation';
import ProjectList from './ProjectList';
import { Switch, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import Types from './ImageExample';
import Error404 from './Error404';


function App(){
  return (
    <div>
      <NavBar/>
      <Header/>
      <About/>
      <Resume/>
      <Contact/>
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
