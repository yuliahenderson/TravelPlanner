import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Homepage from '../components/homepage.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';
import Userboard from '../components/userboard.jsx';
import requireAuth from '../auth.js';
import PostList from '../components/postList.jsx';
import Post from '../components/post.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Homepage} />
        <Route path="register" component={Register} />
        <Route path="login" component={Login} />
        <Route path=":uid" component={Userboard} onEnter={requireAuth}>
          <Route path="postList" component={PostList} onEnter={requireAuth} />
          <Route path="post" component={Post} onEnter={requireAuth} />
        </Route>
      </Route>
    </Router>
  );
};

export default Routes;

