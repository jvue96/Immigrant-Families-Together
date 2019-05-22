import React, { Component } from 'react';
import { connect } from 'react-redux';

class BioIdentify extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_BIO_INFO' });
        console.log('GET_BIO_INFO', this.props.reduxState.familyReducer);
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            IDENTIFICATION 
                        </h1>
                    </div>

                    <div>{this.props.reduxState.bioReducer.map(id =>
                <div>
<p className="bioDivs">PASSPORT: FALSE (HARD CODED)</p>
<p className="bioDivs">U.S. IDENTIFICATION: FALSE (HARD CODED)</p>
<p className="bioDivs">NOTES: THIS NEEDS TO BE ADDED </p>
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