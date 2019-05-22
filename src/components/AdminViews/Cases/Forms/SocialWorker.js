import React, { Component } from 'react';

class SocialWorker extends Component {

    next = () => {
        this.props.history.push('/grocery-form')
    }


    render() {
        return (
            <div>
                 <center>
                    <div>
                        <h1>
                            SOCIAL WORKER FORM
                        </h1>
                    </div>
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