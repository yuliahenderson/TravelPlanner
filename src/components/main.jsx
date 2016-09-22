import React, { Component } from 'react';

const propTypes = {
  children: React.PropTypes.element.isRequired,
};

class Main extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <div>
        <div id="nav">
          <h1>TRAVEL PLANNER</h1>
        </div>
        <div id="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Main.propTypes = propTypes;

export default Main;
