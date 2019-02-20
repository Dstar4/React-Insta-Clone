import React from "react";
import "./Post.css";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";

const Post = props => {
  return (
    <div>
      <PostHeader
        userName={props.post.username}
        imageUrl={props.post.thumbnailUrl}
      />
      <img src={props.post.imageUrl} alt="" className="main-image" />
      <LikeSection />
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

export default Post;
