import React, { Component } from 'react';

class FundForm extends Component {

    next = () => {
        alert(`You've created a new case!`)
        this.props.history.push('/admin-landing')
    }

    render() {
        return (
            <div>
                  <center>
                    <div>
                        <h1>
                            GO FUND ME FORM 
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>LINK</label> <br/>
                        <input type="text" />  <br/> 
                        <button
                        onClick={this.next}
                        >COMPLETE CASE</button>
                    </div>
                </center>
            </div>
        );
    }
}

export default FundForm;