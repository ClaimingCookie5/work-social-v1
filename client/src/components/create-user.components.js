import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };

    console.log(user);

    axios
      .post('http://localhost:5000/users/add', user)
      .then((res) => console.log(res.data));
    // window.location = '/';
    this.setState({
      username: '',
      email: '',
      password: '',
    });
  }

  render() {
    return (
      <div>
        <h3>Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div>
            <input
              type='text'
              value={this.state.username}
              onChange={this.onChangeUsername}
              placeholder='Username'
            />
          </div>
          <div>
            <input
              type='email'
              required
              value={this.state.email}
              onChange={this.onChangeEmail}
              placeholder='Email'
            />
          </div>
          <div>
            <input className="blablah"
              type='password'
              value={this.state.password}
              onChange={this.onChangePassword}
              placeholder='Password'
            />
          </div>
          <div>
            <input type='submit' value='Create Account' />
          </div>
        </form>
      </div>
    );
  }
}