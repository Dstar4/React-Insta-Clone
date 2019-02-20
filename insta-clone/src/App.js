import React, { Component } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import PostContainer from "./components/PostContainer/PostContatiner";
import dummyData from "./dummy-data";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filteredPosts: []
    };
  }
  componentDidMount() {
    this.setState({ posts: dummyData });
  }
  searchPostsHandler = e => {
    const posts = this.state.posts.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostContainer
          post={
            this.state.filteredPosts.length > 0
              ? this.state.filteredPosts
              : this.state.posts
          }
        />
      </div>
    );
  }
}
export default App;
