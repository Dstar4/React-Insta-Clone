import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  signIn = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };
  render() {
    return (
      <form>
        <h1>Login Here</h1>
        <input
          type="text"
          placeholder="Username"
          value={this.state.username}
          onChange={this.inputChange}
          name="username"
        />
        <input
          type="text"
          placeholder="Password"
          value={this.state.password}
          onChange={this.inputChange}
          name="password"
        />
        <button onClick={this.signIn}>Sign In</button>
      </form>
    );
  }
}

export default Login;
