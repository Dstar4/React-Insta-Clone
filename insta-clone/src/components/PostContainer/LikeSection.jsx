import React from "react";

const LikeSection = props => {
  return (
    <div className="likes-section">
      <div
        className="like-section"
        key="likes-icons-container"
        onClick={props.incrementLike}
      >
        <i className="far fa-heart like-icon" />
      </div>
      {props.likes}
      <i className="far fa-comment like-icon" />
    </div>
  );
};
export default LikeSection;
