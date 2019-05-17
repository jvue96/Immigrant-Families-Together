import React, { Component } from 'react';

class LegalBond extends Component {
    render() {
        return (
            <div>
               <center>
                    <div>
                        <h1>
                            BOND INFO
                        </h1>
                    </div>
                    <label>BOND AMOUNT: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>DATE PAID: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>PAID BY: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                </center> 
            </div>
        );
    }
}

export default LegalBond;