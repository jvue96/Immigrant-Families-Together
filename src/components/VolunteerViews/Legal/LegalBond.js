import React, { Component } from 'react';
import { connect } from 'react-redux';
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
               <center>
                    <div>
                        <h1>
                            BOND INFO
                        </h1>
                    </div>

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