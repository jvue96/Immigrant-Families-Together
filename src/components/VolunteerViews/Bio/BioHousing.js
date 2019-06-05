import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class BioHousing extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_HOUSING', payload: searchObject.id });
    }

    render() {

        let emptyHousing; 
        if(this.props.reduxState.housingReducer.length === 0) {
            emptyHousing = <div className="bioCard">
                                <hr/>
                                <label>ADDRESS:</label>  
                                <p className="PCard"></p>
                                <hr/>
                                <label>MONTLY RENT:</label>  
                                <p className="PCard"></p>
                                <hr/>
                                <label>RENT PAID BY:</label>  
                                <p className="PCard"></p>
                                <hr/>
                                <label>UTILITIES:</label>  
                                <p className="PCard"></p>
                                <hr/>
                                <label>LIVING WITH FAMILY:</label>  
                                <p className="PCard"></p>
                                <hr/>
                            </div>
                        } 


        return (
            <div>
                <Nav pageName='HOUSING' volunteer home='/home' /> 
                    <center>    
                        <div>
                            {emptyHousing}
                            {this.props.reduxState.housingReducer.map((housing,index) =>
                                <div className="bioCard" key={index}>
                                    <hr/>
                                    <label>ADDRESS:</label>  
                                    <p className="PCard">{housing.address}</p>
                                    <hr/>
                                    <label>MONTLY RENT:</label>  
                                    <p className="PCard">{housing.rent}</p>
                                    <hr/>
                                    <label>RENT PAID BY:</label>  
                                    <p className="PCard">{housing.paid_by}</p>
                                    <hr/>
                                    <label>UTILITIES:</label>  
                                    <p className="PCard">{housing.utilities}</p>
                                    <hr/>
                                    <label>LIVING WITH FAMILY:</label>  
                                    <p className="PCard">{housing.living_with_fam}</p>
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

export default connect(mapReduxStateToProps)(BioHousing);