import React, { Component } from 'react';

class GroceryForm extends Component {

    next = () => {
        this.props.history.push('/fund-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            GROCERY FORM
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>GROCERY PROGRAM Y/S</label> <br/>
                        <input type="text" /> <br/>
                        <label>CONTACT NUMBER(FOR WHO?)</label> <br/>
                        <input type="text" /> <br/>
                        <label>VOLUNTEER(VOLUNTEER FOR WHAT?)</label> <br/>
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

export default GroceryForm;