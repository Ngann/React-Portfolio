import React from 'react';
import NavBar from './NavBar';
import Home from './Home';
import Resume from './Resume';
import About from './About';
import ProjectList from './ProjectList';
import ContactList from './ContactList';
import PrivateControl from './PrivateControl';
import ContactControl from './ContactControl';
import { Switch, Route } from 'react-router-dom';
import Error404 from './Error404';
import Helmet from 'react-helmet';



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      masterContactList: []
    };
    this.handleAddingNewContactToList = this.handleAddingNewContactToList.bind(this);
  }

  handleAddingNewContactToList(newContact){
  var newMasterContactList = this.state.masterContactList.slice();
  newMasterContactList.push(newContact);
  this.setState({masterContactList: newMasterContactList});
  this.setState({formVisibleOnPage:false});
}

  render() {
    return (
      <div>
      <Helmet>
      <style>{'body { margin: 0; width:100%;}'}</style>
      </Helmet>
      <NavBar/>
      <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/projectList' component={ProjectList} />
      <Route exact path='/resume' component={Resume} />
      <Route exact path='/about' component={About} />
      <Route path='/contact' render={()=><ContactControl onNewContactCreation={this.handleAddingNewContactToList} />} />
      <Route path='/private' render={()=><ContactList contactList={this.state.masterContactList} />}  />
      <Route component={Error404} />
      </Switch>
      </div>
    );
  }
}

export default App;
