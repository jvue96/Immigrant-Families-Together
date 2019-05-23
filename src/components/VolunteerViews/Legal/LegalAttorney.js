import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';

class LegalAttorney extends Component {

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