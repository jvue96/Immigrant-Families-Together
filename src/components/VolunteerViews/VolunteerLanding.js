import React, { Component } from 'react';
import { connect } from 'react-redux';

class VolunteerLanding extends Component {

    componentDidMount = () => {
        // this.props.dispatch({ type: 'GET_MEDICAL' });
        this.props.dispatch({ type: 'GET_CASES' });
        console.log('GET_MEDICAL', this.props.reduxState.medicalReducer);
    }

    viewCase = (event) => {
        console.log(event.target.dataset.value);
        this.props.dispatch({type: 'GET_CURRENT_ID', payload: event.target.dataset.value})
        this.props.history.push(`/case/events?id=${event.target.dataset.value}`)
    }

    render() {
        return (
            <div>
                <center> 
                    <div>
                        <h1> VOLUNTEER LANDING </h1>
                    </div>

                    {/* show all cases assigned to volunteer */}
                    
                    <table>
                        <thead>
                            <tr>
                                <td>LAST NAME</td>
                                <td>ID NUMBER</td>
                            </tr>
                        </thead>
                        <tbody>
                        {this.props.reduxState.allCasesReducer.map( (cases, index) => {
                        return (
                            <tr key={index}>
                                <td 
                                data-value={cases.id}
                                onClick={this.viewCase}>
                                    {cases.case_last_name}
                                </td>
                                <td>
                                    {cases.case_number}
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