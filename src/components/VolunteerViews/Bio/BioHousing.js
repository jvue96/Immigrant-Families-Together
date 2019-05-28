import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class BioHousing extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL HOUSING searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_HOUSING', payload: searchObject.id });
        console.log('GET_HOUSING', this.props.reduxState.bioReducer);
    }

    render() {
        return (
            <div>
 <Nav pageName='HOUSING' volunteer home='/home' /> 
            <center>


                <div>
                {this.props.reduxState.housingReducer.map(housing =>
                    <div className="bioCard">
                        <hr/>
                        <label>ADDRESS:</label>  
                        <p className="PCard">{housing.address}</p>
                        <hr/>
                        <label>MONTLY RENT:</label>  
                        <p className="PCard">{housing.rent}</p>
                        <hr/>
                        <label>RENT PAID BY:</label>  
                        <p className="PCard">{housing.rent_paid_by}</p>
                        <hr/>
                        <label>UTILITIES:</label>  
                        <p className="PCard">{housing.utilities}</p>
                        <hr/>
                        <label>LIVING WITH FAMILY:</label>  
                        <p className="PCard">{housing.living_with_family}</p>
                        <hr/>
                    </div>
                )}
                </div>



                
                    {/* <label>ADDRESS: </label> <br/>
                    <div className="bioDivs"> 
                    </div> <br/>
                    <label>MONTHLY RENT: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> RENT PAID BY: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> UTILITIES: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> LIVING WITH FAMILIY: Y/N </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/> */}
            </center>
        </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioHousing);