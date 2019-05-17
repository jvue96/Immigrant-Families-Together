import React, { Component } from 'react';

class BioHousing extends Component {
    render() {
        return (
            <div>
            <center>
                <div>
                    <h1>
                        HOUSING 
                    </h1>
                </div>
                    <label>ADDRESS: </label> <br/>
                    <div className="bioDivs"> 
                    </div> <br/>
                    <label>MONTHLY RENT: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> RENT PAID BY: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> UTILITIES: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> LIVING WITH FAMILIY: Y/N </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
            </center>
        </div>
        );
    }
}

export default BioHousing;