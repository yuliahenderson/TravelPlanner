import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
    };
  }
  render() {
    return (
      <div>
        <h2>Keep your trips organized and share with friends</h2>
        <div id="login-form">
          <div>
            <input name="username" type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" type="password" placeholder="password" />
          </div>
          <button className="button">Login</button>
        </div>
      </div>
    );
  }
}

export default Login;
