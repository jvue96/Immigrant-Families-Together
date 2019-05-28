import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import Nav from '../../Nav/Nav'
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
                <Nav pageName='VOLUNTEER BIO' home='/home'/>
                <center>
                    

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
                            <p className="PCard">{users.encrypted}
                            what's supposed to be here? 
                            </p>
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