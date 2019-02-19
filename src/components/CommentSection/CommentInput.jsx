import React from "react";

// COMMENT INPUT FORM

const CommentInput = props => {
  return (
    <form onSubmit={props.submitComment}>
      <input
        type="text"
        placeholder="Add Comment..."
        value={props.comment}
        onChange="props.changeComment"
      />
    </form>
  );
};
export default CommentInput;
