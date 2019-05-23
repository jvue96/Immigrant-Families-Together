import React, { Component } from 'react';
// import AidSocial from "./AidSocial";
// import AidGrocery from "./AidGrocery";
// import AidFund from "./AidFund";
import Nav from '../../Nav/Nav'






class Aid extends Component {

    socialPages = () => {
        this.props.history.push('/aid-social')
    }
    groceryPages = () => {
        this.props.history.push('/aid-grocery')
    }
    fundPages = () => {
        this.props.history.push('/aid-fund')
    }

    // state = {
    //     button: "social", 
    // }

    // viewSelectedButton = (propertyName) => {   
    //     return(event) =>{
    //     this.setState({
    //         [propertyName]: event.target.value,
    //         });
    //     }    
    // }

    render() {

        // let div = <div>  </div>
        // if(this.state.button === "social") {
        //     div = <div> <AidSocial/> </div>
        // } else if (this.state.button === "grocery") {
        //     div = <div> <AidGrocery/> </div>
        // } else if (this.state.button === "fund") {
        //     div = <div> <AidFund/> </div>
        // } 

        return (
            <div>
                 <Nav pageName='AID' volunteer home='/home' /> 

                <center> 
                {/* <button 
                onClick={this.viewSelectedButton('button')}
                value={"social"}
                >SOCIAL WORKER</button> 

                <button
                value={"grocery"}
                onClick={this.viewSelectedButton('button')}
                >GROCERY PROGRAM</button> 

                <button
                onClick={this.viewSelectedButton('button')}
                value={"fund"}
                >GO FUND ME</button> 

                {div} */}

                <button className="adminMenuButtons" onClick={this.socialPages}>SOCIAL WORKER</button>
                <button className="adminMenuButtons" onClick={this.groceryPages}>GROCERY PROGRAM</button>
                <button className="adminMenuButtons" onClick={this.fundPages}>GO FUND ME</button>
                </center>
            </div>
        );
    }
}

export default Aid;