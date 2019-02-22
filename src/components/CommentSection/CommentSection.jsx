import React from "react";
<<<<<<< HEAD
import Comment from "./Comment";
import CommentInput from "./CommentInput";
=======
import PropTypes from "prop-types";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

>>>>>>> daniel-starling
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      comment: ""
    };
  }
  componentDidMount() {
    const id = this.props.postId;
    if (localStorage.getItem(id)) {
      this.setState({
        comments: JSON.parse(localStorage.getItem(this.props.postId))
      });
    } else {
      this.setComments();
    }
  }
<<<<<<< HEAD
  componentWillUnmount() {
    this.setComments();
  }
  setComments = () => {
=======

  componentWillUnmount() {
    this.setComments();
  }
  setComments() {
>>>>>>> daniel-starling
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
<<<<<<< HEAD
  };
  handleComment = e => {
    this.setState({ comment: e.target.value });
  };
  submitComment = e => {
    e.preventDefault();
    const newComment = {
      text: this.state.comment,
      username: localStorage.getItem("user")
    };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
=======
  }
  commentHandler = e => {
    this.setState({ comment: e.target.value });
  };
  handleCommentSubmit = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: "daniel" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
    setTimeout(() => {
      this.setComments();
    }, 500);
>>>>>>> daniel-starling
  };
  render() {
    return (
      <div>
<<<<<<< HEAD
        {this.state.comments.map((a, b) => (
          <Comment key={b} comment={a} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.submitComment}
          handleComment={this.handleComment}
=======
        {this.state.comments.map((c, i) => (
          <Comment key={i} comment={c} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.handleCommentSubmit}
          changeComment={this.commentHandler}
>>>>>>> daniel-starling
        />
      </div>
    );
  }
}
<<<<<<< HEAD
=======

CommentSection.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.string, username: PropTypes.string })
  )
};

>>>>>>> daniel-starling
export default CommentSection;
