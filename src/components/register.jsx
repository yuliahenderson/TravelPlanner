import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';


class Register extends Component {
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
     .createUserWithEmailAndPassword(username, password)
     .catch((err) => {
       console.log(err);
     })
     .then((user) => {
       firebase.database().ref('users')
       .child(user.uid)
       .set({ email: username });
     })
      .then(() => {
        this.props.router.push('/userboard');
      });
  }
  render() {
    return (
      <div>
        <h2>Keep your trips organized and share with friends</h2>
        <div id="register-form">
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="button" onClick={this.handleSubmit}>Register</button>
        </div>
      </div>
    );
  }
}

export default withRouter (Register);
