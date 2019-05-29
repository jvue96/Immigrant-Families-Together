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
        return (
            <div>
                 <Nav pageName='SOCIAL WORKER' volunteer home='/home' /> 

                <center>
                   

                    <div>{this.props.reduxState.aidReducer.map(aid =>
                      <div className="bioCard">
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



                    {/* <label>SOCIAL WORKER: </label> <br/>
                    <div className="bioDivs"> 
                    </div> <br/>
                    <label>PHONE: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> EMAIL: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> NOTES: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/> */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AidSocial);