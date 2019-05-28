import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';


class LegalBond extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('BOND searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
    }
    
    render() {
        return (
            <div>
                 <Nav pageName='BOND INFO' volunteer home='/home' /> 
               <center>
                    <div>{this.props.reduxState.bondReducer.map(bond =>
                     <div className="bioCard">
                        <hr/>
                        <label>BOND AMOUNT:</label>
                        <p className="PCard"> {bond.bond_amount}</p>
                        <hr/>
                        <label>BOND PAID DATE:</label>
                        <p className="PCard"> {bond.bond_paid_date}</p>
                        <hr/>
                        <label>BOND PAID BY:</label>
                        <p className="PCard"> {bond.bond_paid_by}</p>
                        <hr/>
                    </div>
                    )}
                    </div>


                    {/* <label>BOND AMOUNT: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>DATE PAID: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>PAID BY: </label> <br/> 
                    <div className="bioDivs"> </div> <br/>  */}
                </center> 
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalBond);