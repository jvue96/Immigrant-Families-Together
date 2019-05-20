import React, { Component } from 'react';
import { connect } from 'react-redux';

class BioIdentify extends Component {
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            IDENTIFY 
                        </h1>
                    </div>

                    <div>{this.props.reduxState.identifyReducer.map(id =>
                <div>
<p className="bioDivs">PASSPORT: {id.passport}</p>
<p className="bioDivs">U.S. IDENTIFICATION CARD: {id.identification}</p>
<p className="bioDivs">NOTES: {id.notes}</p>
                </div>
)}
</div>

                    {/* <label>PASSPORT: Y/N</label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> US ID: Y/N</label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> NOTES </label> <br/>
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

export default connect(mapReduxStateToProps)(BioIdentify);