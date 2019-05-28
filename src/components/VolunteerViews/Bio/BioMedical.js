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
                <div className="bioCard">
                    <hr/>
                    <label>DOCTOR NAME:</label>  
                    <p className="PCard"> {medical.doctor_name}</p>
                    <hr/>
                    <label>DOCTOR PHONE:</label> 
                    <p className="PCard"> {medical.doctor_phone}</p>
                    <hr/>
                    <label>MEDICAL CONDITIONS:</label> 
                    <p className="PCard"> {medical.medical_conditions}</p>
                    <hr/>
                    <label>COUNSELOR:</label> 
                    <p className="PCard"> {medical.counselor}</p>
                    <hr/>
                    <label>COUNSELOR PHONE:</label> 
                    <p className="PCard"> {medical.counselor_phone}</p>
                    <hr/>
                    <label>PEDIATRICIAN:</label> 
                    <p className="PCard"> {medical.pediatrician}</p>
                    <hr/>
                    <label>PEDIATRICIAN PHONE:</label> 
                    <p className="PCard"> {medical.pediatrician_phone}</p>
                    <hr/>
                    <label>OPTOMETRIST:</label> 
                    <p className="PCard"> {medical.optometrist}</p>
                    <hr/>
                    <label>OPTOMETRIST PHONE:</label> 
                    <p className="PCard"> {medical.optometrist_phone}</p>
                    <hr/>
                    <label>DENTIST:</label> 
                    <p className="PCard"> {medical.dentist}</p>
                    <hr/>
                    <label>DENTIST PHONE:</label> 
                    <p className="PCard"> {medical.dentist_phone}</p>
                    <hr/>
                    <label>VACCINATIONS:</label> 
                    <p className="PCard"> {medical.vaccinations}</p>
                    <hr/>
                    <label>INSURANCE CARD INFO:</label> 
                    <p className="PCard"> {medical.insurance_card_info}</p>
                    <hr/>
                    <label>FEE COVERAGE:</label> 
                    <p className="PCard"> {medical.fee_coverage}</p>
                    <hr/>
                    <label>MEDICAL NOTES:</label> 
                    <p className="PCard"> {medical.medical_notes}</p>
                    <hr/>
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