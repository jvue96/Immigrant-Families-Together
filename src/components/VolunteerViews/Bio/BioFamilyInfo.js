import React, { Component } from 'react';
import { connect } from 'react-redux';

class BioFamilyInfo extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_BIO_INFO' });
        console.log('GET_BIO_INFO', this.props.reduxState.familyReducer);
    }
    
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            GENERAL BIO
                        </h1>
                    </div>

                    <div>{this.props.reduxState.bioReducer.map(bio =>
                <div>
<p className="bioDivs">FIRST NAME: {bio.first_name}</p>
<p className="bioDivs">LAST NAME: {bio.last_name}</p>
<p className="bioDivs">DOB: {bio.dob}</p>
<p className="bioDivs">SPOUSE NAME: {bio.spouse_first_name}</p>
<p className="bioDivs">SPOUSE DOB: {bio.spouse_dob}</p>
<p className="bioDivs">PHONE: {bio.phone}</p>
<p className="bioDivs">WHATSAPP USERNAME: {bio.encrypted}</p>
<p className="bioDivs">EMAIL: {bio.email}</p>
<p className="bioDivs">ADDRESS: {bio.address}</p>
<p className="bioDivs">REFERRED BY: {bio.referred_by}</p>
<p className="bioDivs">REFERRAL DATE: {bio.reference_date}</p>
<p className="bioDivs">PASSPORT: FALSE (HARD CODED)</p>
<p className="bioDivs">U.S. IDENTIFICATION: FALSE (HARD CODED)</p>
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