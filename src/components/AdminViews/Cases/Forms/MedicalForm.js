import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';

class MedicalForm extends Component {
   
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('medicalForm searchObject', searchObject);
        this.setState({
            medicalForm:{
                ...this.state.medicalForm,
                case_id: searchObject.id,
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

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            medicalForm: {
                case_id: this.props.reduxState.caseReducer.rows[0].id,
                doctor_name: 'Bradley Hennen',
                doctor_phone: '612-555-5434',
                medical_conditions: 'diabetes',
                counselor: 'Susan Inman',
                counselor_phone: '763-555-5674',
                pediatrician: 'Michael Jackson',
                pediatrician_phone: '847-555-4225',
                optometrist: 'Joe Thumb',
                optometrist_phone: '763-555-4235',
                dentist: 'Chris Smiley',
                dentist_phone: '742-555-3754',
                vaccinations: 'all up to date',
                insurance_card_info: 'BCBS: 13454246',
                fee_coverage: false,
                medical_notes: 'in general good health'
            }
        })
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
                        value={this.state.medicalForm.doctor_name}
                        onChange={this.handleChange('doctor_name')}/> 
                        
                        <label>PRIMARY DOCTOR PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.doctor_phone}
                        onChange={this.handleChange('doctor_phone')}/> 
                    
                        <label>MEDICAL CONDITIONS</label> 
                        <input type="text"
                        value={this.state.medicalForm.medical_conditions}
                        onChange={this.handleChange('medical_conditions')}/> 

                        <label>COUNSELOR NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.counselor}
                        onChange={this.handleChange('counselor')}/> 
                        
                        <label>COUNSELOR PHONE</label> 
                        <input type="text" 
                        value={this.state.medicalForm.counselor_phone}
                        onChange={this.handleChange('counselor_phone')}/> 
                        
                        <label>PEDIATRICIAN NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.pediatrician}
                        onChange={this.handleChange('pediatrician')}/> 
                        
                        <label>PEDIATRICIAN PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.pediatrician_phone}
                        onChange={this.handleChange('pediatrician_phone')}/> 
                       
                        <label>OPTOMETRIST NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.optometrist}
                        onChange={this.handleChange('optometrist')}/> 
                        
                        <label>OPTOMETRIST PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.optometrist_phone}
                        onChange={this.handleChange('optometrist_phone')}/> 
                        
                        <label>DENTIST NAME</label> 
                        <input type="text"
                        value={this.state.medicalForm.dentist}
                        onChange={this.handleChange('dentist')}/> 
                        
                        <label>DENTIST PHONE</label> 
                        <input type="text"
                        value={this.state.medicalForm.dentist_phone}
                        onChange={this.handleChange('dentist_phone')}/> 
                        
                        <label>VACCINATIONS</label> 
                        <input type="text"
                        value={this.state.medicalForm.vaccinations}
                        onChange={this.handleChange('vaccinations')}/> 
                        
                        <label>INSRUANCE CARD INFO</label> 
                        <input type="text"
                        value={this.state.medicalForm.insurance_card_info}
                        onChange={this.handleChange('insurance_card_info')}/> 
                        
                        <label>FEE COVERAGE</label> 
                        <select
                        value={this.state.medicalForm.fee_coverage}
                        onChange={this.handleChange('fee_coverage')}>
                        <option value="0">-</option>
                        <option value="True">True</option>
                        <option value="False">False</option>
                        </select> 
                        
                        <label>MEDICAL NOTES</label> 
                        <input type="text"
                        value={this.state.medicalForm.medical_notes}
                        onChange={this.handleChange('medical_notes')}/> 
                        
                        <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button>

                        <button className="formButton" onClick={this.autoPopulate}>FILL INFO</button> 
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