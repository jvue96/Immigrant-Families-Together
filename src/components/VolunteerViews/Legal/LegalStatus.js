import React, { Component } from 'react';

class LegalStatus extends Component {
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            LEGAL STATUS
                        </h1>
                    </div>
                    <label> LAST COURT DATE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>OUTCOME: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>NEXT COURT DATE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>TOPIC: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>ASYLUM APPLIED FOR: Y/N: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>WORTH AUTHORIZATION Y/N: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                </center>
            </div>
        );
    }
}

export default LegalStatus;