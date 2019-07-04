import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
// import qs from 'query-string';

class VolunteerLanding extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_USER_CASES', payload: this.props.reduxState.user.id});
    }

    viewCase = (event) => {
        this.props.dispatch({type: 'GET_CURRENT_ID', payload: event.target.dataset.value})
        this.props.history.push(`/volunteer-events?id=${event.target.dataset.value}`)
    }

    render() {
        return (
            <div>
                <Nav pageName='VOLUNTEER LANDING' />

                <center> 
                    {/* {JSON.stringify(this.props.reduxState.allCasesReducer)} */}
                    {/* show all cases assigned to volunteer */}
                    <img src="/IFT.png" alt="Immigrant Families Togeter Logo"/>
                    <h1> CASES </h1>
                    <table>
                        <thead>
                            <tr>
                                <th>LAST NAME</th>
                                <th>ID NUMBER</th>
                            </tr>
                        </thead>
                        <tbody>

                        {this.props.reduxState.userCasesReducer.map( (cases, index) => {
                        return (
                            <tr key={index}>
                                <td 
                                data-value={cases.case_id}
                                onClick={this.viewCase}>
                                    {cases.last_name}
                                </td>
                                <td>
                                    {cases.case_id}
                                </td>
                            </tr>
                                )
                            })}  
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

export default connect(mapReduxStateToProps)(VolunteerLanding);