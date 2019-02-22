import React from "react";
<<<<<<< HEAD
// import "./SearchBar.css";
import Iglogo from "../../assets/iglogo.png";
import InstaCamera from "../../assets/instaCamera.svg";
import styled from "styled-components";
const Header = styled.div`
  display: flex;
  margin: 10px auto;
  padding-bottom: 10px;
  border-bottom: 1px solid darkgray;
  justify-content: space-evenly;
`;
const Logos = styled.div`
  display: flex;
`;
const IgCamera = styled.img`
  height: 40px;
  width: auto;
  margin: 0 10px;
`;
const IgText = styled.img`
  width: auto;
  height: 40px;
  padding: 0 10px;
  border-left: 1px solid black;
`;
const Icons = styled.text`
  display: flex;
`;
const Icon = styled.text`
  margin: 0 10px;
`;
const SearchBar = props => {
  return (
    <Header>
      <Logos>
        <IgCamera src={InstaCamera} alt="" />
        <IgText src={Iglogo} alt="" />
      </Logos>
      <div className="search">
        <input
          type="text"
          placeholder="&#128270;Search"
          onKeyDown={props.searchPosts}
        />
      </div>
      <Icons>
        <Icon>
          <i className="far fa-compass" />
        </Icon>
        <Icon>
          <i className="far fa-heart" />
        </Icon>
        <Icon>
          <i className="far fa-user-circle" />
        </Icon>
      </Icons>
    </Header>
=======
import "./SearchBar.css";
const SearchBar = props => {
  return (
    <div className="search-bar-wrapper">
      <div className="image-wrapper">INSTAGRAM</div>
      <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="social-wrapper">
        <div className="social">
          <i className="far fa-compass" />
        </div>
        <div className="social">
          <i className="far fa-heart" />
        </div>
        <div className="social">
          <i className="far fa-user-circle" />
        </div>
      </div>
    </div>
>>>>>>> daniel-starling
  );
};
export default SearchBar;
