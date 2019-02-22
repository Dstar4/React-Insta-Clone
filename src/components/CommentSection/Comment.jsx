import React from "react";
import PropTypes from "prop-types";
<<<<<<< HEAD
import styled from "styled-components";
import UserName from "../Styles/styles";

const CommentBox = styled.div`
  display: flex;
  width: 500px;
`;
const CommentUser = styled(UserName)`
  margin-right: 5px;
`;
const CommentText = styled.span``;
const Comment = props => {
  return (
    <CommentBox>
      <CommentUser>{props.comment.username}</CommentUser>
      <CommentText>{props.comment.text}</CommentText>
    </CommentBox>
  );
};
=======
import "./Comment.css";

// LIST OF USER COMMENTS
const Comment = props => {
  return (
    <div className="comment-text">
      <span className="comment">{props.comment.text}</span>{" "}
      <span className="user">-{props.comment.username}</span>
    </div>
  );
};

>>>>>>> daniel-starling
Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
export default Comment;
