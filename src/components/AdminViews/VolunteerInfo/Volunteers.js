import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Volunteers extends Component {

    viewVolunteer = () => {
        console.log(`hit view volunteer!`);
        // do something to view volunteer information 
        // currently routes to generic volunteer bio 
        this.props.history.push('/volunteer-bio')
    }

    searchBy = () => {
        console.log(`hit serach button!`);
        // do something to search for volunteer 
    }

    render() {
        return (
            <div>
                
                <div className="nav">
                <div className="navLeft2" onClick={this.backButton}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">VOLUNTEER</h2>
                </div>
                <div className="navRight">
                <Link to="/home">
                    <i class="fas fa-home"></i>
                </Link>
                </div>
                </div>

                <center>
                        {/* map over volunteers into a table with tr's and td's  
                        includes volunteer's last name, first name, and select button that routes user to their BIO.
                        */}
                    <label>SEARCH</label> 
                    <input placeholder="VOLUNTEER NAME" /> 
                    <button className="formButton" onClick={this.searchBy}> SEARCH </button>

                    <table>
                        <thead>
                            <tr>
                                <th>LAST NAME </th>
                                <th>FIRST NAME </th>
                            </tr>
                        </thead>
                        <tbody>
                                <tr onClick={this.viewVolunteer}>
                                    <td>VUE</td>
                                    <td>JUNO</td>
                                </tr>
                                <tr onClick={this.viewVolunteer}>
                                    <td>RAGSDALE</td>
                                    <td>BEN</td>
                                </tr>
                                <tr onClick={this.viewVolunteer}>
                                    <td>DOUGLAS</td>
                                    <td>KINGMAN</td>
                                </tr>
                                <tr onClick={this.viewVolunteer}>
                                    <td>Schlach</td>
                                    <td>Joe</td>
                                </tr>
                            </tbody>
                    </table>
                </center>
            </div>
        );
    }
}

export default Volunteers;