import React, { Componetn } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
      </Route>
    </Router>
  );
}

export default Routes;

