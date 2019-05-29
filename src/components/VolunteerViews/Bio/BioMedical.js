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

        let emptyMedical; 
        if(this.props.reduxState.medicalReducer.length === 0) {
            emptyMedical = <div className="bioCard">
            <hr/>
            <label>DOCTOR NAME:</label>  
            <p className="PCard"></p>
            <hr/>
            <label>DOCTOR PHONE:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>MEDICAL CONDITIONS:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>COUNSELOR:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>COUNSELOR PHONE:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>PEDIATRICIAN:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>PEDIATRICIAN PHONE:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>OPTOMETRIST:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>OPTOMETRIST PHONE:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>DENTIST:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>DENTIST PHONE:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>VACCINATIONS:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>INSURANCE CARD INFO:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>FEE COVERAGE:</label> 
            <p className="PCard"></p>
            <hr/>
            <label>MEDICAL NOTES:</label> 
            <p className="PCard"></p>
            <hr/>
        </div>
        }

        return (
            <div>
                 <Nav pageName='MEDICAL' volunteer home='/home' /> 
                    <center>
                        <div>
                            {emptyMedical}
                            {this.props.reduxState.medicalReducer.map((medical,index) =>
                                <div className="bioCard" key={index}>
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
                                    <p className="PCard"> {String(medical.fee_coverage)}</p>
                                    <hr/>
                                    <label>MEDICAL NOTES:</label> 
                                    <p className="PCard"> {medical.medical_notes}</p>
                                    <hr/>
                                </div>
                            )}
                        </div>
                </center>
            </div>
                );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(BioMedical);