import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';


class LegalFoster extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('BOND searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
    }

    render() {
        return (
            <div>
 <Nav pageName='FOSTER FACILITY' volunteer home='/home' /> 

                <center>

                    <div>{this.props.reduxState.bondReducer.map(bond =>
                    <div className="bioCard">
                        <hr/>
                        <label>FOSTER FACILITY:</label>
                        <p className="PCard"> {bond.foster_facility}</p>
                        <hr/>
                        <label>FOSTER FACILITY ADDRESS:</label>
                        <p className="PCard"> {bond.foster_facility_address}</p>
                        <hr/>
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