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
                        <label>NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>PHONE</label> <br/>
                        <input type="text" /> <br/>
                        <label>EMAIL</label> <br/>
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

export default SocialWorker;