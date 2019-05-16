import React, { Component } from 'react';

class AttorneyForm extends Component {

    next = () => {
        this.props.history.push('/legal-form')
    }

    render() {
        return (
            <div>
                 <center>
                    <div>
                        <h1>
                            ATTORNEY FORM
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>PHONE</label> <br/>
                        <input type="text" /> <br/>
                        <label>EMAIL</label> <br/>
                        <input type="text" /> <br/>
                        <label>FEE</label> <br/>
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

export default AttorneyForm;