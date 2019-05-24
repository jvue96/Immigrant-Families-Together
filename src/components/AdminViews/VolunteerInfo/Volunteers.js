import React, { Component } from 'react';
import { connect } from 'react-redux';

class Volunteers extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_ALL_VOLUNTEER' });
    }

    viewVolunteer = (event) => {
        console.log(`hit view volunteer!`);
        console.log(`!!!!0o9i8765`,event.target.dataset.value);
        // this.props.history.push('/volunteer-landing')
        this.props.history.push(`/volunteer-bio?id=${event.target.dataset.value}`)
    }

    searchBy = () => {
        console.log(`hit search button!`);
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
                    <h2 className="navH2">ALL VOLUNTEER</h2>
                </div>
                <div className="navRight">
                </div>
                </div>

                <center>
    
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
                    {/* map over cases assigned to volunteer */}
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

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Volunteers);