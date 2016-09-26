import React, { Component } from 'react';

const propTypes = {
  joinCount: React.PropTypes.number,
  handleJoinClick: React.PropTypes.func,
};

class JoinButton extends Component {
  render() {
    return (
      <div className="join-button">
        <button onClick={this.props.handleJoinClick}>JOIN</button>
        <p className="join-count">{this.props.joinCount}</p>
      </div>
    );
  }
}

JoinButton.propTypes = propTypes;

export default JoinButton;
