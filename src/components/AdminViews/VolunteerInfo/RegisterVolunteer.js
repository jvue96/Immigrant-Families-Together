import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class RegisterVolunteer extends Component {
    
    register = () => {
        console.log(`hit register button!`);
        alert(`You've registered a new volunteer!`)
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
                    <div className='formDivs'>
                    <label>NAME</label> <br/>
                    <input type="text" /> <br/>
                    <label>PASSWORD</label> <br/>
                    <input type="text" /> <br/>
                    <label>PHONE</label> <br/>
                    <input type="text" /> <br/>
                    <label>EMAIL</label> <br/>
                    <input type="text" /> <br/>
                    <label>ENCRYPTED</label> <br/>
                    <input type="text" /> <br/>
                    <label>ADDRESS</label> <br/>
                    <input type="text" /> <br/>
                    <label>SKILSS</label> <br/>
                    <input type="text" /> <br/>
                    <label>SECOND LANGUAGE</label> <br/>
                    <input type="text" /> <br/>

                    <button className="formButton" onClick={this.register}>REGISTER</button>
                    </div>
                </center>
            </div>
        );
    }
}

export default RegisterVolunteer;