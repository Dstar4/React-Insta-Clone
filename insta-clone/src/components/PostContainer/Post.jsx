import React from "react";
import "./Post.css";
import PostHeader from "./PostHeader";
import PostContainer from "./PostContatiner";
const Post = props => {
  return (
    <div>
      <PostHeader
        userName={props.post.username}
        imageUrl={props.post.thumbnailUrl}
      />
      <img src={props.post.imageUrl} alt="" />
    </div>
  );
};

export default Post;
