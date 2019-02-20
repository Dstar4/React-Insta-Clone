import React from "react";
import Post from "./Post";
import "./Post.css";
const PostContainer = props => {
  return (
    <div className="post-container">
      {props.post.map(post => (
        <Post key={post.imageUrl} post={post} className="post" />
      ))}
    </div>
  );
};

export default PostContainer;
