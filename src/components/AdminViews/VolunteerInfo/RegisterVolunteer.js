import React, { Component } from 'react';

class RegisterVolunteer extends Component {
    
    register = () => {
        console.log(`hit register button!`);
        alert(`You've registered a new volunteer!`)
        // do something to put new volunteer into database(s)
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            REGISTER VOLUNTEER
                        </h1>
                    </div>
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