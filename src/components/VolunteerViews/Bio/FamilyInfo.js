import React, { Component } from 'react';
import Nav from '../../Nav/Nav'
 
class FamilyInfo extends Component {
    render() {
        return (
            <div>
                <Nav pageName='FAMILY INFO' volunteer home='/home' />
                <center>
                    <p> display in cards and map? </p>

                    <p> NAME: </p>
                    <p> DOB: </p>
                    <p> RELATION: </p>

                    <h3> CASE REFERRED BY: </h3>

                    <h3> DATE: </h3>

                    <h3> BACKSTORY: </h3>

                </center>
            </div>
        );
    }
}

export default FamilyInfo;