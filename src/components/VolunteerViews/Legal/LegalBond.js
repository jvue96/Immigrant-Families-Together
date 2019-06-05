import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment'; 


class LegalBond extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('BOND searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
    }

      // if date is null, will display empty <p> instead of "Invalid Date" on DOM 
      checkDate = (property) => {
        if(property === null) {
        property = ''
        return property; 
        } else {
            property =  moment(property).subtract(10, 'days').calendar();
            return property; 
        }
    }
    
    render() {

        // render labels with empty information if reducer is empty
        let emptyBond;
        if(this.props.reduxState.bondReducer.length === 0) {
            emptyBond =  <div className="bioCard">
                            <hr/>
                            <label>BOND AMOUNT:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>BOND PAID DATE:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>BOND PAID BY:</label>
                            <p className="PCard"></p>
                            <hr/>
                        </div>
                    }

        return (
            <div>
                 <Nav pageName='BOND INFO' volunteer home='/home' /> 
                    <center>
                            <div>
                            {emptyBond}
                            {this.props.reduxState.bondReducer.map((bond, index) =>
                                <div className="bioCard" key={index}>
                                    <hr/>
                                    <label>BOND AMOUNT:</label>
                                    <p className="PCard"> {bond.bond_amount}</p>
                                    <hr/>
                                    <label>BOND PAID DATE:</label>
                                    <p className="PCard"> {this.checkDate(bond.bond_paid_date)}</p>
                                    <hr/>
                                    <label>BOND PAID BY:</label>
                                    <p className="PCard"> {bond.bond_paid_by}</p>
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

export default connect(mapReduxStateToProps)(LegalBond);