import React, { Component } from 'react';
import request from 'superagent';
import PostList from './postList.jsx';
import Post from './post.jsx';


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
                   dateTo: individualPostData.dateTo,
                   dateBack: individualPostData.dateBack,
                   destination: individualPostData.destination,
                 };
               });
             }
             this.setState({ posts });
           });
  }
  handlePublish({ id, dateTo, dateBack, destination }) {
    if (id) {
      this.httpUpdatePost({ id, dateTo, dateBack, destination });
    } else {
      this.httpPublishPost({ dateTo, dateBack, destination });
    }
  }
  httpDeletePost(id) {
    const url = `https://travel-planner-65a26.firebaseio.com/posts${id}.json`;
    request.del(url)
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpUpdatePost({ id, dateTo, dateBack, destination }) {
    const url = `https://travel-planner-65a26.firebaseio.com/posts${id}.json`;
    request.patch(url)
           .send({ dateTo, dateBack, destination })
           .then(() => {
             this.httpGetPosts();
           });
  }
  httpPublishPost({ dateTo, dateBack, destination }) {
    const url = 'https://travel-planner-65a26.firebaseio.com/posts.json';
    request.post(url)
           .send({ dateTo, dateBack, destination })
           .then(() => {
             this.httpGetPosts();
           });
  }

  render() {
    return (
      <div>
        <PostList handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} posts={this.state.posts} />
        <Post handleDelete={this.httpDeletePost} handlePublish={this.handlePublish} />
      </div>
    );
  }
}

export default Userboard;
