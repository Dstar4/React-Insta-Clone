import React, { Component } from "react";
import "./App.css";
import PostsPage from "./components/PostContainer/PostsPage";
import authenticate from "./components/Authentication/Authentication";
import Login from "./components/Login/Login";
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
const LoginAuthenticate = authenticate(Login)(PostsPage);
export default App;
