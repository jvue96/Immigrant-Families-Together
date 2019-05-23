import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'


class LegalBond extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_BOND' });
        console.log('GET_BOND', this.props.reduxState.bondReducer);
    }
    
    render() {
        return (
            <div>
                 <Nav pageName='BOND INFO' volunteer home='/home' /> 
               <center>
                    <div>{this.props.reduxState.bondReducer.map(bond =>
                    <div>
                        <p className="bioDivs">BOND AMOUNT: {bond.bond_amount}</p>
                        <p className="bioDivs">BOND PAID DATE: {bond.bond_paid_date}</p>
                        <p className="bioDivs">BOND PAID BY: {bond.bond_paid_by}</p>
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