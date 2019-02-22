import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Resume from './Resume';
import About from './About';
import ProjectList from './ProjectList';
import { Switch, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import Types from './ImageExample';
import Error404 from './Error404';
import Helmet from 'react-helmet';



function App(){
  return (
    <div>
      <Helmet>
       <style>{`body { margin: 0; width:100%;}`}</style>
       </Helmet>
      <NavBar/>
      <Home/>
      <ProjectList/>
      <Resume/>
      <About/>
      <ContactForm/>
      <Switch>
        <Route exact path='/'/>
        <Route exact path='/projectList' component={ProjectList} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/about' component={About} />
        <Route path='/contactform' component={ContactForm} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
