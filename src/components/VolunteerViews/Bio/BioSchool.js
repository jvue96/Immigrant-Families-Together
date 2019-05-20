import React, { Component } from 'react';
import { connect } from 'react-redux';

class BioSchool extends Component {
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            SCHOOL
                        </h1>
                    </div>

<div>{this.props.reduxState.schoolReducer.map(school =>
                <div>
<p className="bioDivs">SCHOOL NAME: {school.school}</p>
<p className="bioDivs">SCHOOL CONTACT: {school.school_contact}</p>
<p className="bioDivs">PHONE: {school.phone}</p>
<p className="bioDivs">EMAIL: {school.email}</p>
                </div>
)}
</div>



                    {/* <label>SCHOOL NAME: </label> <br/>
                    <div className="bioDivs" />
                    <label> SCHOOL CONTACT</label> <br/>
                    <div className="bioDivs" />
                    <label> PHONE </label> <br/>
                    <div className="bioDivs" />
                    <label> EMAIL </label> <br/>
                    <div className="bioDivs" /> */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioSchool);