import React, { Component } from 'react';

class VolunteerLanding extends Component {

    searchBy = () => {
        console.log(`hit search by`);
        // incorporpoate transition from clicking case name to individual case. 
        // this basic set up does not impliment on click of name, go to their file. 
    }

    viewCase = () => {
        this.props.history.push('/case/events')
    }

    render() {
        return (
            <div>
                <center> 
                    <div>
                        <h1> VOLUNTEER LANDING </h1>
                    </div>
                    <label>SEARCH: </label>
                    <input style={{width: 150, height: 20}} type="text" placeholder="CASE NUMBER / NAME" /> <br/>
                    <button onClick={this.searchBy}> SEARCH </button> 

                    <p>NOTE: will volunteer click on name? a box? what's the visual to indicate clicking/selecting </p>
                    <p>click "Vue" to go to tabs for individual case </p>

                    {/* show all cases assigned to volunteer */}
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

export default VolunteerLanding;