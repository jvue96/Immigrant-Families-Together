import React, { Component } from 'react';

class AidGrocery extends Component {
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            GROCERY PROGRAM
                        </h1>
                    </div>
                    <label>GROCERY PROGRAM: Y/N </label> <br/>
                    <div className="bioDivs"> 
                    </div> <br/>
                    <label>VOLUNTEER: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> VOLUNTEER PHONE: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> NOTES: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                </center> 
            </div>
        );
    }
}

export default AidGrocery;