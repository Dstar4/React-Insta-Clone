import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import authenticate from "./components/Authentication/Authentication";
import LoginPage from "./components/Authentication/LoginPage";
class App extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="App">
        <LoginAuthenticate />
      </div>
    );
  }
}
const LoginAuthenticate = authenticate(PostsPage)(LoginPage);
export default App;
