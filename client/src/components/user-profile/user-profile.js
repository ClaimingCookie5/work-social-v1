import React, { Component } from "react";
import axios from "axios";

export default class SendGift extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onChangeName(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeMessage(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const sendGift = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };

    console.log(sendGift);

    axios
      .post("http://localhost:5000/profile/username", sendGift)
      .then((res) => console.log(res.data));
    // window.location = '/';
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  }

  render() {
    return (
      <div>
        <h3>Send Gift</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type="text"
              value={this.state.Name}
              onChange={this.onChangeName}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className="Message"
              type="message"
              value={this.state.message}
              onChange={this.onChangeMessage}
              placeholder="Enter message here"
            />
          </div>
          <div>
            <input type="submit" value="Send Gift" />
          </div>
        </form>
      </div>
    );
  }
}
