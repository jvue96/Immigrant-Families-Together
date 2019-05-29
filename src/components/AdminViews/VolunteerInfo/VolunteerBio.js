import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

class VolunteerBio extends Component {

    componentDidMount = () => {
       
        const searchObject = qs.parse(this.props.location.search)
        console.log('Individual volunteer bio searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_VOLUNTEER_BIO', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_CASES'});
        this.props.dispatch({ type: 'GET_VOLUNTEER_CASES', payload: searchObject.id });
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
        this.props.history.push('/volunteers')
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
                    <div className="bioCard">
                        <hr/>
                        <div>
                            <label>NAME</label>  
                            <p className="PCard">{users.username}</p>
                        </div>
                        <hr/>
                        <div>
                            <label>LOCATION</label>  
                            <p className="PCard">{users.address}</p>
                        </div>
                        <hr/>
                        <div>
                            <label>PHONE NUMBER</label>  
                            <p className="PCard">{users.phone}</p>
                        </div>
                        <hr/>
                        <div>
                            <label>EMAIL</label>  
                            <p className="PCard">{users.email}</p>
                        </div>
                        <hr/>
                        <div>
                            <label>ENCRYPTED</label>  
                            <p className="PCard">{users.encrypted}</p>
                        </div>
                        <hr/>
                        <div>
                            <label>ADDRESS</label>  
                            <p className="PCard">{users.address}</p>
                        </div>
                        <hr/>
                        <div>
                            <label>SKILLS</label>  
                            <p className="PCard">{users.skills}</p>
                        </div>
                        <hr/>
                        <div>
                            <label>SECOND LANGUAGE</label>  
                            <p className="PCard">{users.second_language}</p>
                        </div>
                        <hr/>
                    </div>
                    </section> 

                    )})}
<h1>
    ASSIGN CASE
</h1> 
<select
onChange={this.handleChange('case_id')}
>
    <option>-</option>
    {this.props.reduxState.allCasesReducer.map(cases => (
    <option value={cases.id}>
        {cases.case_last_name}
    </option>
    ))}
</select>
                    <button className="formButton" onClick={this.assignCase}> ASSIGN CASE </button>  


                    <h1> CASE LOAD </h1>
                    {this.props.reduxState.volunteerCases.map( cases => (
                    <table>
                        <thead>
                            <tr>
                                <td>LAST NAME</td>
                                <td>CASE ID</td>
                            </tr>
                        </thead>
                        
                    {/* map over cases assigned to volunteer */}
                    <tbody>
                            <tr>
                                <td onClick={this.viewCase}>{cases.last_name}</td>
                                <td>{cases.case_id}</td>
                            </tr>
                        </tbody>
                    </table> 
                    ))}
                </center>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(VolunteerBio);