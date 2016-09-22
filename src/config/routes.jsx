import React, { Componetn } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Homepage from '../components/homepage.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Homepage} />
      </Route>
    </Router>
  );
}

export default Routes;

