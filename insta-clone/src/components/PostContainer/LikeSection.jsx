import React from "react";

const LikeSection = props => {
  return (
    <div
      className="like-section"
      key="likes-icons-container"
      onClick={props.incrementLike}
    >
      <i className="far fa-heart like-icon" />
      <i className="far fa-comment like-icon" />
      {props.likes}
    </div>
  );
};
export default LikeSection;
