import React, { Component } from 'react';
import Nav from '../../Nav/Nav'

class Team extends Component {
    render() {
        return (
            <div>
 <Nav pageName='TEAM' volunteer home='/home' /> 
            <center> 
                <h2> VOLUNTEERS </h2>

                <div className="bioDivs"
                style={{height: 200}}>
                <label>NAME</label> <span> </span> <br/>
                <label>PHONE</label> <span> </span> <br/>
                <label>ENCRYPTED</label> <span> </span> <br/>
                <label>EMAIL</label> <span> </span> <br/>
                <label>ROLE</label> <span> </span> <br/>
                <label>SKILLS</label> <span> </span> <br/>
                <label>SECOND LANGUAGE</label> <span> </span> <br/>
                <label>ADDRESS</label> <span> </span> <br/>

                </div>
            </center>
            </div>

        );
    }
}

export default Team;