import React, { Component } from 'react';
class LoginView extends Component {

    volunteerLogin = () => {
        this.props.history.push('/volunteer-landing')
    }

    adminLogin = () => {
        this.props.history.push('/admin-landing')
    }

    render() {
        return (
            <div>
                <center>
                    <div> LOGIN </div>
                    <p> insert IFT logo here </p>
                    <br />
                    <input type="text" placeholder="username" /> 
                    <br /> 
                    <input type="text" placeholder="password" /> 
                    <br /> 
                    <button onClick={this.volunteerLogin}> volunteer login  </button>
                    <button onClick={this.adminLogin}> admin login  </button>
                </center>
            </div>
        );
    }
}

export default LoginView;