import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class MedicalForm extends Component {
   
    // componentDidMount = () => {
    //     this.props.dispatch({ type: 'GET_ME_SOMETHING_YOOOO' });
    //     console.log('GET_ME_SOMETHING_YOOOO', this.props.reduxState.SOMETHING);
    // }

    next = () => {
        // this.props.dispatch({ type: 'POST_SOMETHING_YOOOOOO', payload: this.state.medicalForm })
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

    handleChange = propertyName => event => {
        this.setState({
            medicalForm: {
                ...this.state.medicalForm,
                [propertyName]: event.target.value,
            }
        })
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
                        <input type="text"
                        value={this.state.medicalForm.doctor_name}
                        onChange={this.handleChange('doctor_name')}/> <br/>
                        
                        <label>PRIMARY DOCTOR PHONE</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.doctor_phone}
                        onChange={this.handleChange('doctor_phone')}/> <br/>
                    
                        <label>MEDICAL CONDITIONS</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.medical_conditions}
                        onChange={this.handleChange('medical_conditions')}/> <br/>

                        <label>COUNSELOR NAME</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.counselor}
                        onChange={this.handleChange('counselor')}/> <br/>
                        
                        <label>COUNSELOR PHONE</label> <br/>
                        <input type="text" 
                        value={this.state.medicalForm.counselor_phone}
                        onChange={this.handleChange('counselor_phone')}/> <br/>
                        
                        <label>PEDIATRICIAN NAME</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.pediatrician}
                        onChange={this.handleChange('pediatrician')}/> <br/>
                        
                        <label>PEDIATRICIAN PHONE</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.pediatrician_phone}
                        onChange={this.handleChange('pediatrician_phone')}/> <br/>
                       
                        <label>OPTOMETRIST NAME</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.optometrist}
                        onChange={this.handleChange('optometrist')}/> <br/>
                        
                        <label>OPTOMETRIST PHONE</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.optometrist_phone}
                        onChange={this.handleChange('optometrist_phone')}/> <br/>
                        
                        <label>DENTIST NAME</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.dentist}
                        onChange={this.handleChange('dentist')}/> <br/>
                        
                        <label>DENTIST PHONE</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.dentist_phone}
                        onChange={this.handleChange('dentist_phone')}/> <br/>
                        
                        <label>VACCINATIONS</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.vaccinations}
                        onChange={this.handleChange('vaccinations')}/> <br/>
                        
                        <label>INSRUANCE CARD INFO</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.insurance_card_info}
                        onChange={this.handleChange('insurance_card_info')}/> <br/>
                        
                        <label>FEE COVERAGE</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.fee_coverage}
                        onChange={this.handleChange('fee_coverage')}/> <br/>
                        
                        <label>MEDICAL NOTES</label> <br/>
                        <input type="text"
                        value={this.state.medicalForm.medical_notes}
                        onChange={this.handleChange('medical_notes')}/> <br/>
                        
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

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(MedicalForm));