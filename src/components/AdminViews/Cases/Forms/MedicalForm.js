import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class MedicalForm extends Component {

    next = () => {
        this.props.history.push('/school-form')
    }

    state = {
        medicalForm: {
            doctor_name: '',
            doctor_phone: '',
            medical_conditions: '',
            counselor: '',
            counselor_phone: '',
            pediatrician: '',
            pediatrician_phone: '',
            optometrist: '',
            optometrist_phone: '',
            dentist: '',
            dentist_phone: '',
            vaccinations: '',
            insurance_card_info: '',
            fee_coverage: '',
            medical_notes: ''
        }
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
                        <label>PRIMARY DOCTOR NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>PRIMARY DOCTOR PHONE</label> <br/>
                        <input type="text" /> <br/>
                        <label>COUNSELOR NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>COUNSELOR PHONE</label> <br/>
                        <input type="text" /> <br/>
                        <label>PEDIATRICIAN NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>PEDIATRICIAN PHONE</label> <br/>
                        <input type="text" /> <br/>
                        <label>OPTOMETRIST NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>OPTOMETRIST PHONE</label> <br/>
                        <input type="text" /> <br/>
                        <label>DENTIST NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>DENTIST PHONE</label> <br/>
                        <input type="text" /> <br/>
                        <label>VACCINATIONS</label> <br/>
                        <input type="text" /> <br/>
                        <label>INSRUANCE CARD INFO</label> <br/>
                        <input type="text" /> <br/>
                        <label>FEE COVERAGE</label> <br/>
                        <input type="text" /> <br/>
                        <label>MEDICAL NOTES</label> <br/>
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

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(MedicalForm));