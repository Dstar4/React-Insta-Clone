import React from "react";
import Post from "./Post";
import "./Post.css";

const PostsContainer = props => {
  return (
    <div className="post-wrapper">
      {props.posts.map(p => (
        <Post key={p.imageUrl} post={p} />
      ))}
    </div>
  );
};

export default PostsContainer;
