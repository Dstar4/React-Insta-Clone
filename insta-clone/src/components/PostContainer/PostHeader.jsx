import React from "react";
import "./Post.css";
const PostHeader = props => {
  return (
    <div>
      <img src={props.imageUrl} alt="" className="profile-thumbnail" />
    </div>
  );
};

export default PostHeader;
