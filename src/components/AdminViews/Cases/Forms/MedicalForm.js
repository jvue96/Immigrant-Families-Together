import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';

class MedicalForm extends Component {
   
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        // setting properties to null allow users to post null values into the database
        // which can then be edited later 
        this.setState({
            medicalForm:{
                ...this.state.medicalForm,
                case_id: searchObject.id,
                doctor_name: null, 
                doctor_phone: null, 
                medical_conditions: null, 
                counselor: null, 
                counselor_phone: null, 
                pediatrician: null, 
                pediatrician_phone: null, 
                optometrist: null, 
                optometrist_phone: null, 
                dentist: null, 
                dentist_phone: null, 
                vaccinations: null, 
                insurance_card_info: null, 
                fee_coverage: null, 
                medical_notes: null, 
            }
        })  
    }

    next = () => {
        this.props.dispatch({ type: 'ADD_MEDICAL', payload: this.state.medicalForm })
        this.props.history.push(`/school-form?id=${this.state.medicalForm.case_id}`)
    }

    state = {
        medicalForm: {
            case_id: this.props.reduxState.caseReducer.rows[0].id,
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
                <Nav pageName='MEDICAL FORM' home='/home'/>
                <center>
                    <div className="formDivs">
                        <label>PRIMARY DOCTOR NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.doctor_name || ''}
                        onChange={this.handleChange('doctor_name')}/> 
                        
                        <label>PRIMARY DOCTOR PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.doctor_phone || ''}
                        onChange={this.handleChange('doctor_phone')}/> 
                    
                        <label>MEDICAL CONDITIONS</label> 
                        <input type="text"
                        value={this.state.medicalForm.medical_conditions || ''}
                        onChange={this.handleChange('medical_conditions')}/> 

                        <label>COUNSELOR NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.counselor || ''}
                        onChange={this.handleChange('counselor')}/> 
                        
                        <label>COUNSELOR PHONE</label> 
                        <input type="text" 
                        value={this.state.medicalForm.counselor_phone || ''}
                        onChange={this.handleChange('counselor_phone')}/> 
                        
                        <label>PEDIATRICIAN NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.pediatrician || ''}
                        onChange={this.handleChange('pediatrician')}/> 
                        
                        <label>PEDIATRICIAN PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.pediatrician_phone || ''}
                        onChange={this.handleChange('pediatrician_phone')}/> 
                       
                        <label>OPTOMETRIST NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.optometrist || ''}
                        onChange={this.handleChange('optometrist')}/> 
                        
                        <label>OPTOMETRIST PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.optometrist_phone || ''}
                        onChange={this.handleChange('optometrist_phone')}/> 
                        
                        <label>DENTIST NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.dentist || ''}
                        onChange={this.handleChange('dentist')}/> 
                        
                        <label>DENTIST PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.dentist_phone || ''}
                        onChange={this.handleChange('dentist_phone')}/> 
                        
                        <label>VACCINATIONS</label> 
                        <input type="text"
                        value={this.state.medicalForm.vaccinations || ''}
                        onChange={this.handleChange('vaccinations')}/> 
                        
                        <label>INSRUANCE CARD INFO</label> 
                        <input type="text"
                        value={this.state.medicalForm.insurance_card_info || ''}
                        onChange={this.handleChange('insurance_card_info')}/> 
                        
                        <label>FEE COVERAGE</label> 
                        <select
                        value={this.state.medicalForm.fee_coverage || ''}
                        onChange={this.handleChange('fee_coverage')}>
                        <option defaultValue>-</option>
                        <option value={true}>True</option>
                        <option value={false}>False</option>
                        </select> 
                        
                        <label>MEDICAL NOTES</label> 
                        <input type="text"
                        value={this.state.medicalForm.medical_notes || ''}
                        onChange={this.handleChange('medical_notes')}/> 
                        
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

const mapStateToProps = reduxState => ({
    reduxState,
});
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(MedicalForm));