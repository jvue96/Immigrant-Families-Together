import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../Nav/Nav'


class RegisterVolunteer extends Component {
    
    state = {
        username: '',
        password: '',
        phone: '',
        email: '',
        encrypted: '',
        address: '',
        skills: '',
        second_language: '',
        admin: '',
    };

    handleInputChangeFor = propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
      }

    register = () => {
        console.log(`hit register button!`);
        alert(`You've registered a new volunteer!`)
        this.props.dispatch({ type: 'ADD_NEW_VOLUNTEER', payload: this.state })
        this.props.history.push('/home')
      
        // do something to put new volunteer into database(s)
    }

    render() {
        return (
            <div>
 <Nav pageName='REGISTER VOLUNTEER
 '  home='/home' /> 
                <center>
                  
            <div className='formDivs'>
            <label htmlFor="username">
              Username:
              </label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                />
            
            <label htmlFor="password">
              Password:
              </label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            
            <label htmlFor="phone">
              Phone:
              </label>
              <input
                type="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            
            <label htmlFor="email">
              Email:
              </label>
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            
            <label htmlFor="encrypted">
              WhatsApp:
              </label>
              <input
                type="encrypted"
                name="encrypted"
                value={this.state.encrypted}
                onChange={this.handleInputChangeFor('encrypted')}
              />
            
            <label htmlFor="address">
              Address:
              </label>
              <input
                type="address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChangeFor('address')}
              />
            
            <label htmlFor="skills">
              Special Attributes:
              </label>
              <input
                type="skills"
                name="skills"
                value={this.state.skills}
                onChange={this.handleInputChangeFor('skills')}
              />
            
            <label htmlFor="second_language">
              Second Language:
              </label>
              <input
                type="second_language"
                name="second_language"
                value={this.state.second_language}
                onChange={this.handleInputChangeFor('second_language')}
              />

            <label htmlFor="admin">
              Admin Access:
              </label>
              <input
                type="admin"
                name="admin"
                value={this.state.admin}
                onChange={this.handleInputChangeFor('admin')}
              />
            
                    <button className="formButton" onClick={this.register}>REGISTER</button>
                    </div>
                </center>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(RegisterVolunteer));