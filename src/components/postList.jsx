import React, { Component } from 'react';
import Post from './post.jsx';

const propTypes = {
  posts: React.PropTypes.array.isRequired,
};

class PostList extends Component {
  render() {
    const postElements = this.props.posts.map((post, idx) => {
      return (
        <li key={idx}>
          <Post
            date={post.date}
            destination={post.destination}
            daysOfStay={post.daysOfStay}
            id={post.id}
          />
        </li>
      );
    });
    return (
      <ul>
        {postElements}
      </ul>
    );
  }
}

PostList.propTypes = propTypes;
export default PostList;
