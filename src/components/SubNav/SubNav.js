import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import qs from 'query-string';
import '../App/App.css'

class SubNav extends Component {

// }= () => {



    
    render() {
        const searchObject = qs.parse(this.props.location.search)
        return (

            <div className="subnavbar">
            <div className="subNavSection">
            <Link to={`/volunteer-events?id=${searchObject.id}`}>     
                <h3>EVENTS</h3>
                    </Link>
            </div>
            <div className="subNavSection">
            <Link to={`/bio?id=${searchObject.id}`}>  
                <h3>BIO</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to={`/volunteer-legal?id=${searchObject.id}`}>  
                <h3>LEGAL</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to={`/volunteer-aid?id=${searchObject.id}`}>  
                <h3>AID</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to={`/volunteer-team?id=${searchObject.id}`}>  
                <h3>TEAM</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to={`/volunteer-notes?id=${searchObject.id}`}>  
                <h3>NOTES</h3>
                </Link>
            </div>
            </div>
        );
    }
    }

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(SubNav));