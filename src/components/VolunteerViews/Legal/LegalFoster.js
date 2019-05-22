import React, { Component } from 'react';
import { connect } from 'react-redux';

class LegalFoster extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_BOND' });
        console.log('GET_BOND', this.props.reduxState.bondReducer);
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            FOSTER FACILITY
                        </h1>
                    </div>

                    <div>{this.props.reduxState.bondReducer.map(bond =>
                    <div>
                        <p className="bioDivs">FOSTER FACILITY: {bond.foster_facility}</p>
                        <p className="bioDivs">FOSTER FACILITY ADDRESS: {bond.foster_facility_address}</p>
                    </div>
                    )}
                    </div>


                    {/* <label> FOSTER FACILITY </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>ADDRESS </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>PHONE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/>  */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalFoster);