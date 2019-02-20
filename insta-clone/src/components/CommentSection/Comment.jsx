import React from "react";
import "./Comment.css";
const Comment = props => {
  return (
    <div className="comment-box">
      <div className="comment-text">{props.comment.text}</div>
      <div className="comment-user">{props.comment.username}</div>
    </div>
  );
};

export default Comment;
