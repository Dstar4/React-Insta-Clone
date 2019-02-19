import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostsContainer from "./components/PostContainer/PostsContatiner";
import dummyData from "./dummy-data";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer posts={this.state.posts} />
      </div>
    );
  }
}

export default App;