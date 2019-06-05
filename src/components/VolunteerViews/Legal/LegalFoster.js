import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';


class LegalFoster extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
    }

    render() {

        let emptyFoster; 
        if(this.props.reduxState.bondReducer.length === 0) {
            emptyFoster = <div className="bioCard">
                            <hr/>
                            <label>FOSTER FACILITY:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>FOSTER FACILITY ADDRESS:</label>
                            <p className="PCard"></p>
                            <hr/>
                        </div>
                    }

        return (
            <div>
                <Nav pageName='FOSTER FACILITY' volunteer home='/home' /> 
                    <center>
                        <div>
                        {emptyFoster}
                        {this.props.reduxState.bondReducer.map((bond,index) =>
                            <div className="bioCard" key={index}>
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
                    </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalFoster);