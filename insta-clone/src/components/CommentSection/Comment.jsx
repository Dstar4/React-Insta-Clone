import React from "react";

const Comment = props => {
  return (
    <div>
      {props.comment.text}
      {props.comment.username}
    </div>
  );
};

export default Comment;
