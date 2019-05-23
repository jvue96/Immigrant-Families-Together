import React, { Component } from 'react';
// import BioFamilyInfo from './BioFamilyInfo';
// import BioIdentify from "./BioIdentify";
// import BioSchool from "./BioSchool";
// import BioHousing from "./BioHousing";
// import BioMedical from "./BioMedical";

import Nav from '../../Nav/Nav'

class Bio extends Component {

    infoPages = () => {
        this.props.history.push('/bio-family-info')
    }
    housingPages = () => {
        this.props.history.push('/bio-housing')
    }
    medicalPages = () => {
        this.props.history.push('/bio-medical')
    }
    schoolPages = () => {
        this.props.history.push('/bio-school')
    }
    identificationPages = () => {
        this.props.history.push('/bio-identification')
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
                <Nav pageName='BIO' volunteer home='/home' /> 
                <center> 
                 
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
                        <button className="adminMenuButtons" onClick={this.infoPages}>GENERAL BIO</button>
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

export default Bio;