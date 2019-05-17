import React, { Component } from 'react';

class VolunteerBio extends Component {

    assignCase = () => {
        console.log(`hit assign case button!`);
        // do something to assign a case to volunteer 
        this.props.history.push('/case-list')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            VOLUNTEER BIO
                        </h1>
                    </div>

                    <div>
                        <label>NAME</label> <br /> 
                        <p>JUNO, VUE </p>
                    </div>

                    <div>
                        <label>LOCATION</label> <br /> 
                        <p>MINNEAPOLIS, MINNESOTA </p>
                    </div>

                    <div>
                        <label>PHONE NUMBER</label> <br /> 
                        <p>651-234-4321 </p>
                    </div>

                    <div>
                        <label>EMAIL</label> <br /> 
                        <p>ASDF@GMAIL.COM </p>
                    </div>

                    <div>
                        <label>ENCRYPTED</label> <br /> 
                        <p>App Username</p>
                    </div>

                    <div>
                        <label>ADDRESS</label> <br /> 
                        <p>1234 AVE S MINNEAPOLIS, MINNESOTA 55443</p>
                    </div>

                    <div>
                        <label>SKILLS</label> <br /> 
                        <p>EATING FOOD </p>
                    </div>

                    <div>
                        <label>SECOND LANGUAGE</label> <br /> 
                        <p>Spanish</p>
                    </div>

                    <button onClick={this.assignCase}> ASSIGN CASE </button> <br/> 

                    <h1> CASE LOAD </h1>

                    <table>
                        <thead>
                            <tr>
                                <td>LAST NAME</td>
                                <td>FIRST NAME</td>
                            </tr>
                        </thead>
                    {/* map over cases assigned to volunteer */}
                    <tbody>
                            <tr>
                                <td onClick={this.viewCase}>VUE</td>
                                <td>JUNO</td>
                            </tr>
                            <tr>
                                <td>RAGSDALE</td>
                                <td>BEN</td>
                            </tr>
                            <tr>
                                <td>DOUGLAS</td>
                                <td>KINGMAN</td>
                            </tr>
                            <tr>
                                <td>SCHLACHTENHAUFEN</td>
                                <td>JOE</td>
                            </tr>
                        </tbody>
                    </table> 
                </center>
            </div>
        );
    }
}

export default VolunteerBio;