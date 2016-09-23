import React, { Component } from 'react';

const propTypes = {
  date: React.PropTypes.string,
  destination: React.PropTypes.string,
  daysOfStay: React.PropTypes.number,
  id: React.PropTypes.string,
};

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localDate: this.props.date || '',
      localDestination: this.props.destination || '',
      localDaysOfStay: this.props.daysOfStay || '',
    };
  }
  render() {
    return (
      <div>
        <form className="post-view">
          <input
            type="text"
            name="month"
            value={this.state.localDate}
          />
          <input
            type="text"
            name="destination"
            value={this.state.localDestination}
          />
          <input
            type="number"
            name="daysOfStay"
            value={this.state.daysOfStay}
          />
          <input
            type="submit"
            value="save"
          />
        </form>
      </div>
    );
  }
}

Post.propTypes = propTypes;
export default Post;
