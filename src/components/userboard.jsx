import React, { Component } from 'react';
import request from 'superagent';
import PostList from './postList.jsx';


class Userboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.httpGetPosts();
  }
  httpGetPosts() {
    const url = 'https://travel-planner-65a26.firebaseio.com/posts.json';
    request.get(url)
           .then((response) => {
             const postsData = response.body;
             let posts = [];
             if (postsData) {
               posts = Object.keys(postsData).map((id) => {
                 const individualPostData = postsData[id];
                 return {
                   id,
                   date: individualPostData.date,
                   destination: individualPostData.destination,
                   daysOfStay: individualPostData.daysOfStay,
                 };
               });
             }
             this.setState({ posts });
           });
  }

  render() {
    return (
      <div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default Userboard;
