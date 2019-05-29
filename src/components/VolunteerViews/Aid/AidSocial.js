import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';


class AidSocial extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL BioMedical searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_AID', payload: searchObject.id });
    }
    
    render() {

        let emptySocial;
        if(this.props.reduxState.aidReducer.length === 0) {
            emptySocial = <div className="bioCard">
                            <hr/>
                            <label>SOCIAL WORKER:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>SOCIAL WORKER PHONE:</label>
                            <p className="PCard"></p>
                            <hr/>
                        </div>
                    }

        return (
            <div>
                 <Nav pageName='SOCIAL WORKER' volunteer home='/home' /> 
                    <center>
                        <div>
                        {emptySocial}
                        {this.props.reduxState.aidReducer.map((aid,index) =>
                            <div className="bioCard" key={index}>
                                <hr/>
                                <label>SOCIAL WORKER:</label>
                                <p className="PCard"> {aid.social_worker}</p>
                                <hr/>
                                <label>SOCIAL WORKER PHONE:</label>
                                <p className="PCard"> {aid.social_worker_phone}</p>
                                <hr/>
                            </div>
                        )}
                        </div>
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AidSocial);