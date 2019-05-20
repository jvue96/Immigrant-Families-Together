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
                    <label>SEARCH</label> <br/>
                    <input placeholder="VOLUNTEER NAME" /> <br/>
                    <button onClick={this.searchBy}> SEARCH </button>


            <p> * For now, click on Vue to see template for volunteer bio * </p>
                    <table>
                        <thead>
                            <tr>
                                <td>LAST NAME </td>
                                <td>FIRST NAME </td>
                            </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td onClick={this.viewVolunteer}>VUE</td>
                                    <td>JUNO</td>
                                    <td>
                                        <button>
                                            SELECT
                                        </button>
                                    </td>
                                </tr>
                                <tr>
                                    <td>RAGSDALE</td>
                                    <td>BEN</td>
                                        <button>
                                            SELECT
                                        </button>
                                </tr>
                                <tr>
                                    <td>DOUGLAS</td>
                                    <td>KINGMAN</td>
                                        <button>
                                            SELECT
                                        </button>
                                </tr>
                                <tr>
                                    <td>SCHLACHTENHAUFEN</td>
                                    <td>JOE</td>
                                        <button>
                                            SELECT
                                        </button>
                                </tr>
                            </tbody>
                    </table>
                </center>
            </div>
        );
    }
}

export default Volunteers;