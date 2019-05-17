import React, { Component } from 'react';

class BioIdentify extends Component {
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            IDENTIFY 
                        </h1>
                    </div>
                    <label>PASSPORT: Y/N</label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> US ID: Y/N</label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> NOTES </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                </center>
            </div>
        );
    }
}

export default BioIdentify;