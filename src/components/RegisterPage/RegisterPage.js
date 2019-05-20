import React, { Component } from 'react';
import {connect} from 'react-redux';

class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    phone: '',
    email: '',
    encrypted: '',
    address: '',
    skills: '',
    second_language: '',
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password && this.state.phone && this.state.email && this.state.encrypted && this.state.address && this.state.skills && this.state.second_language) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
          phone: this.state.phone,
          email: this.state.email,
          encrypted: this.state.encrypted,
          address: this.state.address,
          skills: this.state.skills,
          second_language: this.state.second_language,
        },
      });
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <center>
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
            </div>
          <div>
            <label htmlFor="password">
              Phone:
              <input
                type="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
            </div>
          <div>
            <label htmlFor="password">
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
            </div>
          <div>
            <label htmlFor="password">
              WhatsApp:
              <input
                type="encrypted"
                name="encrypted"
                value={this.state.encrypted}
                onChange={this.handleInputChangeFor('encrypted')}
              />
            </label>
            </div>
          <div>
            <label htmlFor="password">
              Address:
              <input
                type="address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChangeFor('address')}
              />
            </label>
            </div>
          <div>
            <label htmlFor="password">
              Special Attributes:
              <input
                type="skills"
                name="skills"
                value={this.state.skills}
                onChange={this.handleInputChangeFor('skills')}
              />
            </label>
            </div>
          <div>
            <label htmlFor="password">
              Second Language:
              <input
                type="second_language"
                name="second_language"
                value={this.state.second_language}
                onChange={this.handleInputChangeFor('second_language')}
              />
            </label>
          </div>
          <div>
            <input
              className="formButton"
              type="submit"
              name="submit"
              value="REGISTER"
            />
          </div>
        </form>
          <button
            type="button"
            className="formButton"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            LOGIN
          </button>
        </center>
      </div>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps)(RegisterPage);

