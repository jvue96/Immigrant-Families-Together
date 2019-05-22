import React, { Component } from 'react';
import { connect } from 'react-redux';

class AidSocial extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_AID' });
        console.log('GET_AID', this.props.reduxState.aidReducer);
    }
    
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            SOCIAL WORKER 
                        </h1>
                    </div>

                    <div>{this.props.reduxState.aidReducer.map(aid =>
                <div>
<p className="bioDivs">SOCIAL WORKER: {aid.social_worker}</p>
<p className="bioDivs">SOCIAL WORKER PHONE: {aid.social_worker_phone}</p>
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