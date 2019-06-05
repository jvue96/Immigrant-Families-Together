import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';


class AidFund extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL BioMedical searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_AID', payload: searchObject.id });
    }

    render() {

        // if aidReducer is empty, render labels with empty information 
        let emptyFund;
        if(this.props.reduxState.aidReducer.length === 0) {
            emptyFund = <div className="bioCard">
                            <hr/>
                            <label>GOFUNDME LINK:</label>
                            <p className="PCard"></p>
                            <hr/>
                        </div>
                    }

        return (
            <div>
                <Nav pageName='GOFUNDME' volunteer home='/home' /> 
                    <center>  
                        <div>
                        {emptyFund}
                        {this.props.reduxState.aidReducer.map((aid,index) =>
                            <div className="bioCard" key={index}>
                                <hr/>
                                <label>GOFUNDME LINK:</label>
                                <p className="PCard"> {aid.go_fund_me}</p>
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

export default connect(mapReduxStateToProps)(AidFund);