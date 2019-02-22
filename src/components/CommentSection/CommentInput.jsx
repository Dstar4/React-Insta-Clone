import React from "react";

<<<<<<< HEAD
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
=======
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
>>>>>>> daniel-starling
  );
};
export default CommentInput;
