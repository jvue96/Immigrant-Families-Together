import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class Team extends Component {

    componentDidMount = () => {
        // const searchObject = qs.parse(this.props.location.search)
        // console.log('Individual volunteer bio searchObject', searchObject.id);
        //we will need to ass in the search object to view WHERE ID = USER.ID
        this.props.dispatch({ type: 'GET_TEAM' });
    }

    render() {
        return (
            <div>
 <Nav pageName='TEAM' volunteer home='/home' /> 
            <center> 
                <h1> VOLUNTEERS </h1>
                {this.props.reduxState.teamReducer.map(team => (
                <div className="teamCard">
                    <label>NAME</label>
                    <p className="PCard">{team.username}</p> 
                    <hr/>
                    <label>PHONE</label> 
                    <p className="PCard">{team.phone}</p>
                    <hr/>
                    <label>ENCRYPTED</label> 
                    <p className="PCard">{team.encrypted}</p>
                    <hr/>
                    <label>EMAIL</label> 
                    <p className="PCard">{team.email}</p>
                    <hr/>
                    {/* <label>ROLE</label> <span> </span> <br/> */}
                    <label>SKILLS</label> 
                    <p className="PCard">{team.skills}</p>
                    <hr/>
                    <label>SECOND LANGUAGE</label> 
                    <p className="PCard">{team.second_language}</p>
                    <hr/>
                    <label>ADDRESS</label> 
                    <p className="PCard">{team.address}</p>
                </div>
                  ))}
            </center>
            </div>

        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Team);