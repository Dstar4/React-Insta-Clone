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
    const posts = this.state.posts.filter(posts => {
      if (posts.username.includes(e.target.value)) {
        return posts;
      }
    });
    this.setState({ filteredPosts: posts });
  };
  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchPostsHandler} />
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
