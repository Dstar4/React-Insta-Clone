import React from "react";
import "./Post.css";
import PostHeader from "./PostHeader";
const Post = props => {
  return (
    <div>
      <PostHeader
        userName={props.post.username}
        imageUrl={props.post.thumbnailUrl}
      />
    </div>
  );
};

export default Post;
