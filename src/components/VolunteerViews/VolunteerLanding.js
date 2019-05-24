import React, { Component } from 'react';
import { connect } from 'react-redux';

class VolunteerLanding extends Component {

    componentDidMount = () => {
        // this.props.dispatch({ type: 'GET_MEDICAL' });
        this.props.dispatch({ type: 'GET_CASES' });
        console.log('GET_MEDICAL', this.props.reduxState.medicalReducer);
    }

    searchBy = () => {
        console.log(`hit search by`);
        // incorporpoate transition from clicking case name to individual case. 
        // this basic set up does not impliment on click of name, go to their file. 
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
                    <label>SEARCH: </label>
                    <input style={{width: 150, height: 20}} type="text" placeholder="CASE NUMBER / NAME" /> <br/>
                    <button onClick={this.searchBy}> SEARCH </button> 

                    {/* {JSON.stringify(this.props.reduxState.allCasesReducer)} */}
                  

                    {/* show all cases assigned to volunteer */}
                    {/* {this.props.reduxState.allCasesReducer.map( (cases, index) => { */}
                    {/* return ( */}
                    <table>
                        <thead>
                            <tr>
                                <th>LAST NAME</th>
                                <th>ID NUMBER</th>
                            </tr>
                        </thead>
                    {/* map over cases assigned to volunteer */}
                        <tbody>
                        {this.props.reduxState.allCasesReducer.map( (cases, i) => {
                            return (
                            <tr key={i} onClick={this.viewCase}>
                                <td data-value={cases.id}>
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