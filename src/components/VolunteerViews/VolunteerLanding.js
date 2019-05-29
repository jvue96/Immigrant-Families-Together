import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
class VolunteerLanding extends Component {

    componentDidMount = () => {
        // this.props.dispatch({ type: 'GET_MEDICAL' });
        this.props.dispatch({ type: 'GET_USER_CASES', payload: this.props.reduxState.user.id });
        console.log('user id', this.props.reduxState.user.id);
        
    }

    viewCase = (event) => {
        console.log(event.target.dataset.value);
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