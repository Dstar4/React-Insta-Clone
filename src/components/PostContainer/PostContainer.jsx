import React from "react";
import Post from "./Post";
import styled from "styled-components";
const PostWrapper = styled.div`
  display: flex
  flex-direction: column
  align-items: center
`;
const PostContainer = props => {
  return (
    <PostWrapper>
      {props.post.map(post => (
        <Post key={post.imageUrl} post={post} className="post" />
      ))}
    </PostWrapper>
  );
};

export default PostContainer;
