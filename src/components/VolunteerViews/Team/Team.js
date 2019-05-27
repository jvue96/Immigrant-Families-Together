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
                <h2> VOLUNTEERS </h2>
                {this.props.reduxState.teamReducer.map(team => (
                <div className="bioDivs"
                style={{height: 200}}>
                <label>NAME</label> 
                <p>{team.username}</p>
                <label>PHONE</label> 
                <p>{team.phone}</p>
                <label>ENCRYPTED</label> 
                <p>{team.encrypted}</p>
                <label>EMAIL</label> 
                <p>{team.email}</p>
                {/* <label>ROLE</label> <span> </span> <br/> */}
                <label>SKILLS</label> 
                <p>{team.skills}</p>
                <label>SECOND LANGUAGE</label> 
                <p>{team.second_language}</p>
                <label>ADDRESS</label> 
                <p>{team.address}</p>

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