import React from "react";
import "./SearchBar.css";
import Iglogo from "../../assets/iglogo.png";
import InstaCamera from "../../assets/instaCamera.svg";
const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="logos">
        <img src={InstaCamera} alt="" className="ig-camera" />
        <img src={Iglogo} alt="" className="ig-text" />
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="&#128270;Search"
          onKeyDown={props.searchPosts}
        />
      </div>
      <div className="icons">
        <div className="icon">
          <i className="far fa-compass" />
        </div>
        <div className="icon">
          <i className="far fa-heart" />
        </div>
        <div className="icon">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
  );
};
export default SearchBar;
