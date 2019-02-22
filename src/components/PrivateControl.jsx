import { Switch, Route } from 'react-router-dom';

function PrivateControl(){
  return (
    <div>
      <Helmet>
        <style>{'body { margin: 0; width:100%;}'}</style>
      </Helmet>
      <NavBar/>
      <Switch>
        <Route path='/projectForm' component={ProjectForm} />
        <Route path='/contactList' component={ContactList} />
        <Route component={Error404} />
      </Switch>
    </div>
  );
}

export default PrivateControl;