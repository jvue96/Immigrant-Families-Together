import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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

                <div className="nav">
                <div className="navLeft2" onClick={this.backButton}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">REGISTER VOLUNTEER</h2>
                </div>
                <div className="navRight">
                <Link to="/home">
                    <i class="fas fa-home"></i>
                </Link>
                </div>
                </div>

                <center>
                    <div>
                        <h1>
                            REGISTER VOLUNTEER
                        </h1>
                    </div>
            <div className='formDivs'>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
                />
            </label>
         
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
            
            <label htmlFor="password">
              Phone:
              <input
                type="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleInputChangeFor('phone')}
              />
            </label>
            
            <label htmlFor="password">
              Email:
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChangeFor('email')}
              />
            </label>
            
            <label htmlFor="password">
              WhatsApp:
              <input
                type="encrypted"
                name="encrypted"
                value={this.state.encrypted}
                onChange={this.handleInputChangeFor('encrypted')}
              />
            </label>
            
            <label htmlFor="password">
              Address:
              <input
                type="address"
                name="address"
                value={this.state.address}
                onChange={this.handleInputChangeFor('address')}
              />
            </label>
            
            <label htmlFor="password">
              Special Attributes:
              <input
                type="skills"
                name="skills"
                value={this.state.skills}
                onChange={this.handleInputChangeFor('skills')}
              />
            </label>
            
            <label htmlFor="password">
              Second Language:
              <input
                type="second_language"
                name="second_language"
                value={this.state.second_language}
                onChange={this.handleInputChangeFor('second_language')}
              />
            </label>

            <label htmlFor="password">
              Admin Access:
              <input
                type="admin"
                name="admin"
                value={this.state.admin}
                onChange={this.handleInputChangeFor('admin')}
              />
            </label>
          
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