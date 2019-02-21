import React, { Component } from "react";
import {
  Button,
  Form,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from "reactstrap";
import PostsPage from "../PostContainer/PostsPage";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      modal: true
    };
    this.toggle = this.toggle.bind(this);
  }
  inputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  signIn = e => {
    const user = this.state.username;
    localStorage.setItem("user", user);
    window.location.reload();
  };
  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
  render() {
    return (
      <div>
        <Modal
          backdrop="static"
          keyboard="false"
          centered={true}
          isOpen={this.state.modal}
          // toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader>Sign In</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.signIn}>
              <Input
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.inputChange}
                name="username"
              />
              <br />
              <Input
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.inputChange}
                name="password"
              />
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={this.signIn}>Sign In</Button>
          </ModalFooter>
        </Modal>
        <PostsPage />
      </div>
    );
  }
}
export default Login;
