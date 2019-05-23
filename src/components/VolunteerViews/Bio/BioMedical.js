import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class BioMedical extends Component {

    componentDidMount = () => {
        // this.props.dispatch({ type: 'GET_MEDICAL' });
        // console.log('GET_MEDICAL', this.props.reduxState.medicalReducer);
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL BioMedical searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_MEDICAL', payload: searchObject.id });
        console.log('GET_MEDICAL', this.props.reduxState.bioReducer);
    }


    render() {
        return (
            <div>
                 <Nav pageName='MEDICAL' volunteer home='/home' /> 
            <center>
            <div>{this.props.reduxState.medicalReducer.map(medical =>
                <div>
<p className="bioDivs">DOCTOR NAME: {medical.doctor_name}</p>
<p className="bioDivs">DOCTOR PHONE: {medical.doctor_phone}</p>
<p className="bioDivs">MEDICAL CONDITIONS: {medical.medical_conditions}</p>
<p className="bioDivs">COUNSELOR: {medical.counselor}</p>
<p className="bioDivs">COUNSELOR PHONE: {medical.counselor_phone}</p>
<p className="bioDivs">PEDIATRICIAN: {medical.pediatrician}</p>
<p className="bioDivs">PEDIATRICIAN PHONE: {medical.pediatrician_phone}</p>
<p className="bioDivs">OPTOMETRIST: {medical.optometrist}</p>
<p className="bioDivs">OPTOMETRIST PHONE: {medical.optometrist_phone}</p>
<p className="bioDivs">DENTIST: {medical.dentist}</p>
<p className="bioDivs">DENTIST PHONE: {medical.dentist_phone}</p>
<p className="bioDivs">VACCINATIONS: {medical.vaccinations}</p>
<p className="bioDivs">INSURANCE CARD INFO: {medical.insurance_card_info}</p>
<p className="bioDivs">FEE COVERAGE: {medical.fee_coverage}</p>
<p className="bioDivs">MEDICAL NOTES: {medical.medical_notes}</p>
                </div>
)}
</div>
               {/* <div className="bioDivs"> 
               <label> DOCTOR </label> <span> </span> <br/> 
               <label> PHONE </label> <span> </span>
               </div> <br/> 
               <div className="bioDivs"> 
               <label> PEDIATRICIAN </label> <span> </span> <br/> 
               <label> PHONE </label> <span> </span>
               </div> <br/> 
               <div className="bioDivs"> 
               <label> DENTIST </label> <span> </span> <br/> 
               <label> PHONE </label> <span> </span>
               </div> <br/> 
               <div className="bioDivs"> 
               <label> OPTOMITRIST </label> <span> </span> <br/> 
               <label> PHONE </label> <span> </span>
               </div> <br/> 
               <div className="bioDivs"> 
               <label> COUNCILING: Y/N </label> <span> </span> <br/> 
               <label> PHONE </label> <span> </span>
               </div> <br/> 
               <div className="bioDivs"> 
               <label> MEDICAL CONDITIONS </label> <span> </span> <br/> 
               </div> <br/> 
               <div className="bioDivs"> 
               <label> VACCINATIONS </label> <span> </span> <br/> 
               </div> <br/> 
               <div className="bioDivs"> 
               <label> INSURANCE INFO </label> <span> </span> <br/> 
               </div> <br/> 
               <div className="bioDivs"> 
               <label> FEE COVERAGE </label> <span> </span> <br/> 
               </div> <br/> 
               <div className="bioDivs"> 
               <label> NOTES </label> <span> </span> <br/> 
               </div> <br/>  */}
                    
            </center>
        </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioMedical);