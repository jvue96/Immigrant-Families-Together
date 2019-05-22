import React, { Component } from 'react';
import { connect } from 'react-redux';

class LegalAttorney extends Component {

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
                            ATTORNEY
                        </h1>
                    </div>

                    <div>{this.props.reduxState.bondReducer.map(bond =>
                    <div>
                        <p className="bioDivs">ATTORNEY: {bond.attorney}</p>
                        <p className="bioDivs">ATTORNEY PHONE: {bond.attorney_phone}</p>
                        <p className="bioDivs">ATTORNEY FEE: {bond.attorney_fee}</p>
                    </div>
                    )}
                    </div>


{/* 
                    <label> ATTORNEY: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>PHONE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>EMAIL: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>FEE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/>  */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalAttorney);