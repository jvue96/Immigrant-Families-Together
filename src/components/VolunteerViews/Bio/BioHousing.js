import React, { Component } from 'react';
import { connect } from 'react-redux';
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
            <center>
                <div>
                    <h1>
                        HOUSING 
                    </h1>                 
                </div>


<div>{this.props.reduxState.housingReducer.map(housing =>
<div>
<p className="bioDivs">ADDRESS: {housing.address}</p>
<p className="bioDivs">MONTLY RENT: {housing.rent}</p>
<p className="bioDivs">RENT PAID BY: {housing.rent_paid_by}</p>
<p className="bioDivs">UTILITIES: {housing.utilities}</p>
<p className="bioDivs">LIVING WITH FAMILY: {housing.living_with_family}</p>
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