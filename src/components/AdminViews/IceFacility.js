import React, { Component } from 'react';

class IceFacility extends Component {

    next = () => {
        this.props.history.push('/bond-form')
    }

    render() {
        return (
            <div>
                 <center>
                    <div>
                        <h1>
                            ICE FACILITY
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>NOTES</label> <br/>
                        <input type="text" /> <br/>
                    
                        <button
                        onClick={this.next}
                        >NEXT</button>
                    </div>
                </center>
            </div>
        );
    }
}

export default IceFacility;