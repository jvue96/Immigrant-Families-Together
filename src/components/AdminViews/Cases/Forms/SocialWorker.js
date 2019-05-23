import React, { Component } from 'react';
import Nav from '../../../Nav/Nav'

class SocialWorker extends Component {

    next = () => {
        this.props.history.push('/grocery-form')
    }


    render() {
        return (
            <div>
                <Nav pageName='SOCIAL WORKER FORM' home='/home'/>
                 <center>
                   
                    <div className="formDivs">
                        <label>NAME</label> 
                        <input type="text" /> 
                        <label>PHONE</label> 
                        <input type="text" /> 
                        <label>EMAIL</label> 
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

export default SocialWorker;