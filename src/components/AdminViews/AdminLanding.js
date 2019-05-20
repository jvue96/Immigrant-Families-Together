import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';

import "./Admin.css"

class AdminLanding extends Component {

    registerVolunteer = () => {
        this.props.history.push('/register-volunteer')
    }

    viewVolunteer = () => {
        this.props.history.push('/volunteers')
    }

    viewEvents = () => {
        this.props.history.push('/events')
    }

    viewCases = () => {
        this.props.history.push('/cases')
    }

    render() {
        return (
            <div>

                <div className="nav">
                <div className="navLeft2" onClick={this.backButton}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">ADMIN</h2>
                </div>
                <div className="navRight2">
                <Link to="/home">
                    <LogOutButton className="nav-link"/>
                </Link>
                </div>
                </div>

                <center>
                    <div>
                        <h1>MENU</h1>
                    </div>

                    <button className="adminMenuButtons"
                    onClick={this.viewEvents}
                    >UPCOMING EVENTS</button> <br/>

                    <button className="adminMenuButtons"
                    onClick={this.viewCases}
                    >CASE MANAGEMENT </button> <br/>

                    <button className="adminMenuButtons"
                    onClick={this.viewVolunteer}
                    >VOLUNTEERS</button> <br/>

                    <button className="adminMenuButtons"
                    onClick={this.registerVolunteer}
                    >REGISTER VOLUNTEER</button> <br/>
                </center>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(AdminLanding));

