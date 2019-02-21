import React from "react";
import "./Post.css";
const PostHeader = props => {
  return (
    <div className="post-header">
      <img src={props.thumbUrl} alt="" className="profile-thumbnail" />
      {props.userName}
    </div>
  );
};

export default PostHeader;
