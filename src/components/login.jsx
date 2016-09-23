import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }
  handleSubmit() {
    const { username, password } = this.state;
    firebase.auth()
      .signInWithEmailAndPassword(username, password)
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(err)
      })
      .then(() => {
        this.props.router.push('/userboard');
      })
      console.log(firebase.auth().currentUser);
  }
  render() {
    return (
      <div>
        <h2>Keep your trips organized and share with friends</h2>
        <div id="login-form">
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="button" onClick={this.handleSubmit}>Login</button>
        </div>
      </div>
    );
  }
}

export default withRouter (Login);
