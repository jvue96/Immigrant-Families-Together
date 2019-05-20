import React, { Component } from 'react';
import { connect } from 'react-redux';

class BioFamilyInfo extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_FAMILY_INFO' });
        console.log('GET_FAMILY_INFO', this.props.reduxState.familyReducer);
    }
    
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            FAMILY INFO 
                        </h1>
                    </div>

                    <div>{this.props.reduxState.familyReducer.map(family =>
                <div>
<p className="bioDivs">NAME: {family.name}</p>
<p className="bioDivs">DOB: {family.dob}</p>
<p className="bioDivs">RELATION: {family.relation}</p>
<p className="bioDivs">CASE REFFERED BY: {family.referral_name}</p>
<p className="bioDivs">REFERRAL DATE: {family.referral_date}</p>
<p className="bioDivs">BACKSTORY: {family.backstory}</p>
                </div>
)}
</div>




                    {/* <div className="bioDivs">
                        <label> NAME: </label>
                        <label> DOB: </label>
                        <label> RELATION: </label>
                    </div>
                    <div className="bioDivs">
                        <label> NAME: </label>
                        <label> DOB: </label>
                        <label> RELATION: </label>
                    </div>

                    <label>CASE REFERRED BY:</label>
                    <div className="bioDivs">

                    </div>

                    <label>DATE:</label>
                    <div className="bioDivs">

                    </div>

                    <label>BACKSTORY:</label>
                    <div className="bioDivs">

                    </div> */}

                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioFamilyInfo);