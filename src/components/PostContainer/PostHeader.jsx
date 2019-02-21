import React from "react";
// import "./Post.css";
import styled from "styled-components";
import UserName from "../Styles/styles";
const PostHeadWrapper = styled.div`
  font-size: 15px;
  margin: 10px 0;
  display: flex;
`;
const ThumbImage = styled.img`
  height: 40px;
  width: auto;
  border-radius: 30px;
  margin-right: 10px;
`;

const PostHeader = props => {
  return (
    <PostHeadWrapper>
      <ThumbImage src={props.thumbUrl} alt="" />
      <UserName>{props.userName}</UserName>
    </PostHeadWrapper>
  );
};

export default PostHeader;
