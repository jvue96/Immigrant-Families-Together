import React, { Component } from 'react';

class BioFamilyInfo extends Component {


    
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            FAMILY INFO 
                        </h1>
                    </div>

                    <div className="bioDivs">
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

                    </div>

                </center>
            </div>
        );
    }
}

export default BioFamilyInfo;