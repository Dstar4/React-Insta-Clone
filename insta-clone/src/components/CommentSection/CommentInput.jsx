import React from "react";

const CommentInput = props => {
  return (
    <div>
      <form onSubmit={props.submitComment}>
        <input type="text" placeholder="Add Comment..." value={props.value} />
      </form>
    </div>
  );
};
export default CommentInput;
