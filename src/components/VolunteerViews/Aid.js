import React, { Component } from 'react';
import AidSocial from "./AidSocial";
import AidGrocery from "./AidGrocery";
import AidFund from "./AidFund";

class Aid extends Component {


    state = {
        button: "social", 
    }

    viewSelectedButton = (propertyName) => {   
        return(event) =>{
        this.setState({
            [propertyName]: event.target.value,
            });
        }    
    }

    render() {

        let div = <div>  </div>
        if(this.state.button === "social") {
            div = <div> <AidSocial/> </div>
        } else if (this.state.button === "grocery") {
            div = <div> <AidGrocery/> </div>
        } else if (this.state.button === "fund") {
            div = <div> <AidFund/> </div>
        } 

        return (
            <div>
                <center> 
                <div> BIO </div>
                <div>
                </div>
                <button 
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

                {div}
                </center>
            </div>
        );
    }
}

export default Aid;