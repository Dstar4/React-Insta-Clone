import React from "react";
import Comment from "./Comment";
class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments
    };
  }
  render() {
    return (
      <div>
        {this.state.comments.map((a, b) => (
          <Comment key={b} comment={a} />
        ))}
      </div>
    );
  }
}
export default CommentSection;
