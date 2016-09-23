import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Homepage from '../components/homepage.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';
import Userboard from '../components/userboard.jsx';
import requireAuth from '../auth.js';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Homepage} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path="userboard" component={Userboard} onEnter={requireAuth}/>
      </Route>
    </Router>
  );
};

export default Routes;

