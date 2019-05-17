import React, { Component } from 'react';

class BondForm extends Component {

    next = () => {
        this.props.history.push('/foster-form')
    }

    render() {
        return (
            <div>
                 <center>
                    <div>
                        <h1>
                            BOND FORM
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>BOND AMOUNT</label> <br/>
                        <input type="text" /> <br/>
                        <label>DATE PAID</label> <br/>
                        <input type="text" /> <br/>
                        <label>PAID BY</label> <br/>
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

export default BondForm;