import * as React from 'react';
import { Switch, Route } from 'react-router-dom';


//Components
import Dashboard from '../app/Pages/Dashboard';
import NotFound from '../app/Pages/NotFound';

//Pages
export const Pages = () => {
  return (
    <Switch>
      <Route exact path="/" render={(props) => <Dashboard {...props} />} />
      <Route exact path="/application" render={(props) => <NotFound {...props} />} />
      <Route exact path="/account-management" render={(props) => <NotFound {...props} />} />
      <Route exact path="/members" render={(props) => <NotFound {...props} />} />
      <Route exact path="/report_managment" render={(props) => <NotFound {...props} />} />
      <Route exact path="/account" render={(props) => <NotFound {...props} />} />
    </Switch>
  );
};

export default Pages;
