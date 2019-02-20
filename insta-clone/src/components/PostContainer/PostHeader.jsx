import React from "react";
import "./Post.css";
const PostHeader = props => {
  return (
    <div className="post-header">
      <img src={props.imageUrl} alt="" className="profile-thumbnail" />
      {props.userName}
    </div>
  );
};

export default PostHeader;
