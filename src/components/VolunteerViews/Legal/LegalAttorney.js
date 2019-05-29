import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
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
                 <Nav pageName='ATTORNEY' volunteer home='/home' /> 
                <center>
                    <div>{this.props.reduxState.bondReducer.map(bond =>
                    <div className="bioCard">
                        <hr/>
                        <label>ATTORNEY:</label>  
                        <p className="PCard"> {bond.attorney}</p>
                        <hr/>
                        <label>ATTORNEY PHONE:</label>  
                        <p className="PCard"> {bond.attorney_phone}</p>
                        <hr/>
                        <label>ATTORNEY FEE:</label>  
                        <p className="PCard"> {bond.attorney_fee}</p>
                        <hr/>
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