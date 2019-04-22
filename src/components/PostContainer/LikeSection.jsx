import React from "react";
import styled from "styled-components";
const LikeIcon = styled.text`
margin: 10px
font-size:20px
`;
const LikesWrapper = styled.div`
  display: flex;
  align-items: center;
`;
const LikeSection = props => {
  return (
    <LikesWrapper>
      <div
        className="like-section"
        key="likes-icons-container"
        onClick={props.incrementLike}
      >
        <LikeIcon className="far fa-heart" />
      </div>
      {props.likes}
      <LikeIcon className="far fa-comment" />
    </LikesWrapper>
  );
};
export default LikeSection;
