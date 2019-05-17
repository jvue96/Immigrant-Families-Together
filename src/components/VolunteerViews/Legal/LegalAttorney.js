import React, { Component } from 'react';

class LegalAttorney extends Component {
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            ATTORNEY
                        </h1>
                    </div>
                    <label> ATTORNEY: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>PHONE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>EMAIL: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>FEE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                </center>
            </div>
        );
    }
}

export default LegalAttorney;