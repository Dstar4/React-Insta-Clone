import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContatiner";
import dummyData from "./dummy-data";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer post={this.state.posts} />
      </div>
    );
  }
}
export default App;
