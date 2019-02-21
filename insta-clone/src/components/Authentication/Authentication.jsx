import React, { Component } from "react";

const authenticate = PostsPage => LoginPage =>
  class extends React.Component {
    render() {
      return <LoginPage />;
    }
  };

export default authenticate;
