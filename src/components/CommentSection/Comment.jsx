import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const CommentBox = styled.div`
  display: flex;
  width: 500px;
`;
const CommentUser = styled.div`
  margin-left: 10px;
  font-size: 12px;
  font-weight: 600;
`;
const CommentText = styled.div``;
const Comment = props => {
  return (
    <CommentBox>
      <CommentText>{props.comment.text}</CommentText>
      <CommentUser>{props.comment.username}</CommentUser>
    </CommentBox>
  );
};
Comment.propTypes = {
  comment: PropTypes.shape({
    text: PropTypes.string,
    username: PropTypes.string
  })
};
export default Comment;
