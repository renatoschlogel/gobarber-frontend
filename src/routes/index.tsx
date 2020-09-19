import React from 'react';
import { Switch } from 'react-router-dom';
import Dashboard from '../pages/dashboard/Dashboard';

import SignIn from '../pages/signin/SignIn';
import SignUp from '../pages/signup/SignUp';
import Route from './Route';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/signup" component={SignUp} />

    <Route path="/dashboard" component={Dashboard} isPrivate />
  </Switch>
);

export default Routes;
