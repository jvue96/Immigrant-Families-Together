import React, { Component } from 'react';
import Nav from '../../../Nav/Nav'
class IceFacility extends Component {

    next = () => {
        this.props.history.push('/bond-form')
    }

    render() {
        return (
            <div>
                <Nav pageName='ICE FACILITY' home='/home'/>

                 <center>
                    <div className="formDivs">
                        <label>NAME</label> 
                        <input type="text" /> 
                        <label>NOTES</label> 
                        <input type="text" /> 
                    
                        <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button>
                    </div>
                </center>
            </div>
        );
    }
}

export default IceFacility;