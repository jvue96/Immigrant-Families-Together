import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

class VolunteerBio extends Component {

    componentDidMount = () => {
       
        const searchObject = qs.parse(this.props.location.search)
        console.log('Individual volunteer bio searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_VOLUNTEER_BIO', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_CASES'});
        this.setState({
            assignCase:{
                ...this.state.assignCase,
                user_id: searchObject.id,
            }
        }) 
    }

    state = {
        assignCase: {
            case_id: '',
            user_id: '',
        }
    }

    handleChange = propertyName => event => {
        this.setState({
            assignCase: {
                ...this.state.assignCase,
                [propertyName]: event.target.value,
            }
        })
        console.log(`this is state after handleChange:`, this.state);
        
    }

    assignCase = () => {
        console.log(`hit assign case button!`);
        this.props.dispatch({ type: 'ASSIGN_CASE', payload: this.state.assignCase })
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

                    {/* {JSON.stringify(this.props.reduxState.volunteerBioReducer)} */}

                    {this.props.reduxState.volunteerBioReducer.map( (users, index) => {
                    return (

                        
                    <section>
                    <div>
                        <label>NAME</label>  
                        <p>{users.username}</p>
                    </div>

                    <div>
                        <label>LOCATION</label>  
                        <p>{users.address}</p>
                    </div>

                    <div>
                        <label>PHONE NUMBER</label>  
                        <p>{users.phone}</p>
                    </div>

                    <div>
                        <label>EMAIL</label>  
                        <p>{users.email}</p>
                    </div>

                    <div>
                        <label>ENCRYPTED</label>  
                        <p>{users.encrypted}
                        what's supposed to be here? 
                        </p>
                    </div>

                    <div>
                        <label>ADDRESS</label>  
                        <p>{users.address}</p>
                    </div>

                    <div>
                        <label>SKILLS</label>  
                        <p>{users.skills}</p>
                    </div>

                    <div>
                        <label>SECOND LANGUAGE</label>  
                        <p>{users.second_language}</p>
                    </div>
                    </section> 

                    )})}
<label>ASSIGN CASE</label> 
<select
onChange={this.handleChange('case_id')}
>
    <option>-</option>
    {this.props.reduxState.allCasesReducer.map(cases => (
    <option>
        {cases.case_number}
    </option>
    ))}
</select>
                    <button className="formButton" onClick={this.assignCase}> ASSIGN CASE </button>  


                    {/* MAP OVER CASES ASSIGNED TO VOLUNTEER */}
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


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(VolunteerBio);