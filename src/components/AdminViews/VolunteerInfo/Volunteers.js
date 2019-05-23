import React, { Component } from 'react';
import { connect } from 'react-redux';

class Volunteers extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_ALL_VOLUNTEER' });
    }

    viewVolunteer = () => {
        console.log(`hit view volunteer!`);
        this.props.history.push('/volunteer-landing')
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
                    <button onClick={this.searchBy}> SEARCH </button>

            {this.props.reduxState.volunteerReducer.map( (users, index) => {
                    return (
                    <table key={index}>
                        <thead>
                            <tr>
                                <td>USERNAME</td>
                                <td>EMAIL</td>
                                <td>ADDRESS</td>
                            </tr>
                        </thead>
                    {/* map over cases assigned to volunteer */}
                        <tbody>
                            <tr>
                                <td 
                                data-value={users.id}
                                onClick={this.viewVolunteer}>
                                    {users.username}
                                </td>
                                <td
                                data-value={users.id}
                                onClick={this.viewVolunteer}>
                                    {users.email}
                                </td>
                                <td
                                data-value={users.id}
                                onClick={this.viewVolunteer}>
                                    {users.address}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                      )
                    })}  
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Volunteers);