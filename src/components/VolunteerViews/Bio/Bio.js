import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import BioFamilyInfo from './BioFamilyInfo';
// import BioIdentify from "./BioIdentify";
// import BioSchool from "./BioSchool";
// import BioHousing from "./BioHousing";
// import BioMedical from "./BioMedical";


class Bio extends Component {

    infoPages = (event) => {
        console.log('PAYLOAF FOR GET FAMILY INFO', event.currentTarget.value);
        // this.props.dispatch({type: 'GET_CURRENT_ID', payload: event.currentTarget.value})
        this.props.history.push(`/bio-family-info?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    housingPages = () => {
        this.props.history.push(`/bio-housing?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    medicalPages = () => {
        this.props.history.push(`/bio-medical?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    schoolPages = () => {
        this.props.history.push(`/bio-school?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    identificationPages = () => {
        this.props.history.push(`/bio-identification?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    
    state = {
        button: "bio", 
    }

    viewSelectedButton = (propertyName) => {   
        return(event) =>{
        this.setState({
            [propertyName]: event.target.value,
            });
        }    
    }


    render() {

        // let div = <div>  </div>
        // if(this.state.button === "bio") {
        //     div = <div> <BioFamilyInfo/> </div>
        // } else if (this.state.button === "id") {
        //     div = <div> <BioIdentify/> </div>
        // } else if (this.state.button === "school") {
        //     div = <div> <BioSchool/> </div>
        // } else if (this.state.button === "housing") {
        //     div = <div> <BioHousing/> </div>
        // } else if (this.state.button === "medical") {
        //     div = <div> <BioMedical/> </div>
        // } 

        return (
            <div>
                <center> 
                    <div> BIO </div>
                    <div>
                    </div>
                    {/* <button 
                    onClick={this.viewSelectedButton('button')}
                    value={"bio"}
                    >FAMILY INFO</button> 

                    <button
                    value={"id"}
                    onClick={this.viewSelectedButton('button')}
                    >IDENTIFICATION</button> 

                    <button
                    onClick={this.viewSelectedButton('button')}
                    value={"school"}
                    >SCHOOL</button> 

                    <button
                    onClick={this.viewSelectedButton('button')}
                    value={"housing"}
                    >HOUSING</button> 

                    <button
                    onClick={this.viewSelectedButton('button')}
                    value={"medical"}
                    >MEDICAL</button> 
                    <br/>

                    {div} */}
                    <div>
                        <button className="adminMenuButtons" onClick={this.infoPages} value={this.props.reduxState.caseIdReducer[0].id}>GENERAL BIO</button>
                        <button className="adminMenuButtons" onClick={this.housingPages}>HOUSING</button>
                        <button className="adminMenuButtons" onClick={this.medicalPages}>MEDICAL</button>
                        <button className="adminMenuButtons" onClick={this.schoolPages}>SCHOOL</button>
                        <button className="adminMenuButtons" onClick={this.identificationPages}>IDENTIFICATION</button>
                    </div>
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapReduxStateToProps)(Bio));