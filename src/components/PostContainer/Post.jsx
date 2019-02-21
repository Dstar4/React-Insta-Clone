import React from "react";
import "./Post.css";
import PostHeader from "./PostHeader";
import CommentSection from "../CommentSection/CommentSection";
import LikeSection from "./LikeSection";
import PropTypes from "prop-types";
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
      <div>
        <PostHeader
          userName={this.props.post.username}
          thumbUrl={this.props.post.thumbnailUrl}
        />
        <img src={this.props.post.imageUrl} alt="" className="main-image" />
        <LikeSection
          likes={this.state.likes}
          incrementLike={this.incrementLike}
        />
        <CommentSection
          postId={this.props.post.imageUrl}
          comments={this.props.post.comments}
        />
      </div>
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
export default Post;
