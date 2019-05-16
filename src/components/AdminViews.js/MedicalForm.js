import React, { Component } from 'react';

class MedicalForm extends Component {

    next = () => {
        this.props.history.push('/school-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            MEDICAL FORM 
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>PIMARY DOCTOR INFO</label> <br/>
                        <input type="text" /> <br/>
                        <label>KNOWN CONDITIONS</label> <br/>
                        <input type="text" /> <br/>
                        <label>COUNSELOR INFO</label> <br/>
                        <input type="text" /> <br/>
                        <label>PEDIATRICIAN INFO</label> <br/>
                        <input type="text" /> <br/>
                        <label>OPTOMATRIST INFO</label> <br/>
                        <input type="text" /> <br/>
                        <label>DENTIST INFO</label> <br/>
                        <input type="text" /> <br/>
                        <label>VACCINATIONS</label> <br/>
                        <input type="text" /> <br/>
                        <label>INSURANCE</label> <br/>
                        <input type="text" /> <br/>
                        <label>FEE COVERAGE</label> <br/>
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

export default MedicalForm;