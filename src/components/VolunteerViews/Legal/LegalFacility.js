import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav';
import qs from 'query-string';


class LegalIce extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('LEGAL ICE FACILITY searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
        // console.log('GET_BOND', this.props.reduxState.bondReducer);
    }

    render() {
        return (
            <div>
                 <Nav pageName='ICE FACILITY' volunteer home='/home' /> 

                <center>

                    <div>{this.props.reduxState.bondReducer.map(bond =>
                    <div>
                        <p className="bioDivs">ICE FACILITY: {bond.ice_facility}</p>
                        <p className="bioDivs">NOTES: {bond.legal_notes}</p>
                    </div>
                    )}
                    </div>


                    {/* <label>ICE FACILITY: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>NOTES: </label> <br/> 
                    <div className="bioDivs"> </div> <br/>  */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalIce);