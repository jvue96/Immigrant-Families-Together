import React, { Component } from 'react';

class LegalStatusForm extends Component {

    next = () => {
        this.props.history.push('/social-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            LEGAL STATUS FORM
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>LAST COURT DATE</label> <br/>
                        <input type="text" /> <br/>
                        <label>OUTCOME</label> <br/>
                        <input type="text" /> <br/>
                        <label>NEXT COURT DATE</label> <br/>
                        <input type="text" /> <br/>
                        <label>TOPIC</label> <br/>
                        <input type="text" /> <br/>
                        <label>ASYLUM APPLIED FOR</label> <br/>
                        <input type="text" /> <br/>
                        <label>WORK AUTH</label> <br/>
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

export default LegalStatusForm;