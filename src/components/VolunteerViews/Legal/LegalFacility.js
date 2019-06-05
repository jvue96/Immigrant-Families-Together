import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav';
import qs from 'query-string';


class LegalIce extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
    }

    render() {
        
        let emptyFacility;
        if(this.props.reduxState.bondReducer.length === 0) {
            emptyFacility = <div className="bioCard">
                                <hr/>
                                <label>ICE FACILITY:</label> 
                                <p className="PCard"></p>
                                <hr/>
                                <label>NOTES:</label> 
                                <p className="PCard"></p>
                                <hr/>
                            </div>
                        }

        return (
            <div>
                 <Nav pageName='ICE FACILITY' volunteer home='/home' /> 
                    <center>
                        <div>
                        {emptyFacility}
                        {this.props.reduxState.bondReducer.map((bond, index) =>
                            <div className="bioCard" key={index}>
                                <hr/>
                                <label>ICE FACILITY:</label> 
                                <p className="PCard"> {bond.ice_facility}</p>
                                <hr/>
                                <label>NOTES:</label> 
                                <p className="PCard"> {bond.legal_notes}</p>
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

export default connect(mapReduxStateToProps)(LegalIce);