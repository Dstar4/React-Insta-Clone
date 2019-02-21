import React from "react";

const CommentInput = props => {
  return (
    <div>
      <form onSubmit={props.submitComment}>
        <input
          type="text"
          value={props.value}
          placeholder="Add Comment..."
          onChange={props.handleComment}
        />
      </form>
    </div>
  );
};
export default CommentInput;
