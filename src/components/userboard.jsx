import React, { Component } from 'react';
import request from 'superagent';
import PostList from './postList.jsx';
import Post from './post.jsx';
import firebase from '../../firebase.config.js';


class Userboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.handlePublish = this.handlePublish.bind(this);
    this.httpUpdatePost = this.httpUpdatePost.bind(this);
    this.httpPublishPost = this.httpPublishPost.bind(this);
    this.httpDeletePost = this.httpDeletePost.bind(this);
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    const userId = this.props.params.uid || firebase.auth().currentUser.uid;
    const url = `https://travel-planner-65a26.firebaseio.com/users/${userId}/posts.json`;
    request.get(url)
           .then((response) => {
             const postsData = response.body;
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   dateTo: individualPostData.dateTo,
                   dateBack: individualPostData.dateBack,
                   destination: individualPostData.destination,
                   joinCount: individualPostData.joinCount,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, dateTo, dateBack, destination, joinCount }) {
    if (id) {
      this.httpUpdatePost({ id, dateTo, dateBack, destination, joinCount });
    } else {
      this.httpPublishPost({ dateTo, dateBack, destination, joinCount });
    }
  }
  httpDeletePost(id) {
    const userId = this.props.params.uid || firebase.auth().currentUser.uid;
    const url = `https://travel-planner-65a26.firebaseio.com/users/${userId}/posts/${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, dateTo, dateBack, destination, joinCount }) {
    const userId = this.props.params.uid || firebase.auth().currentUser.uid;
    const url = `https://travel-planner-65a26.firebaseio.com/users/${userId}/posts/${id}.json`;
    request.patch(url)
           .send({ dateTo, dateBack, destination, joinCount })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ dateTo, dateBack, destination }) {
    const userId = this.props.params.uid || firebase.auth().currentUser.uid;
    const url = `https://travel-planner-65a26.firebaseio.com/users/${userId}/posts.json`;
    request.post(url)
           .send({ dateTo, dateBack, destination, joinCount: 0 })
           .then(() => {
             this.httpGetPosts();
           });
  }

  render() {
    return (
      <div>
        <PostList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        <h3>What is your next trip?</h3>
          <img className="ticket-icon" src= 'TravelPlanner/Images/ticket.png' />
        <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default Userboard;
