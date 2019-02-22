import React from "react";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
<<<<<<< HEAD
import LikeSection from "./LikeSection";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Card, CardImg } from "reactstrap";
const MainImage = styled(CardImg)`
  width: 500px;
  height: auto;
`;
const MainCard = styled(Card)`
  padding: 2%;
  margin: 2%;
`;
class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: props.post.likes
    };
  }
  incrementLike = () => {
    let likes = this.state.likes + 1;
    this.setState({ likes });
  };
  render() {
    return (
      <MainCard>
        <PostHeader
          userName={this.props.post.username}
          thumbUrl={this.props.post.thumbnailUrl}
        />
        <MainImage src={this.props.post.imageUrl} alt="" />
        <LikeSection
          likes={this.state.likes}
          incrementLike={this.incrementLike}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </MainCard>
    );
  }
}
Post.propTypes = {
  post: PropTypes.shape({
    username: PropTypes.string,
    thumbnailUrl: PropTypes.string,
    imageUrl: PropTypes.string
  })
};
=======
import "./Post.css";

const Post = props => {
  return (
    <div className="post-border">
      <PostHeader
        username={props.post.username}
        thumbnailUrl={props.post.thumbnailUrl}
      />
      <div className="post-image-wrapper">
        <img
          alt="post thumbnail"
          className="post-image"
          src={props.post.imageUrl}
        />
      </div>
      <CommentSection comments={props.post.comments} />
    </div>
  );
};

>>>>>>> daniel-starling
export default Post;
