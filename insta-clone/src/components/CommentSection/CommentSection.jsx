import React from "react";
import Comment from "./Comment";
import CommentInput from "./CommentInput";
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
  componentWillUnmount() {
    this.setComments();
  }
  setComments = () => {
    localStorage.setItem(
      this.props.postId,
      JSON.stringify(this.state.comments)
    );
  };
  handleComments = e => {
    this.setState({ comment: e.target.value });
  };
  submitComment = e => {
    e.preventDefault();
    const newComment = { text: this.state.comment, username: "user" };
    const comments = this.state.comments.slice();
    comments.push(newComment);
    this.setState({ comments, comment: "" });
  };

  render() {
    return (
      <div>
        {this.state.comments.map((a, b) => (
          <Comment key={b} comment={a} />
        ))}
        <CommentInput
          comment={this.state.comment}
          submitComment={this.state.submitComment}
          changeComment={this.handleComments}
        />
      </div>
    );
  }
}
export default CommentSection;
