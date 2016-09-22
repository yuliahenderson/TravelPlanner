import React, { Componetn } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Homepage from '../components/homepage.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Homepage} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
      </Route>
    </Router>
  );
}

export default Routes;

