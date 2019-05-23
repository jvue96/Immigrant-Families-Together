import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
// import AidSocial from "./AidSocial";
// import AidGrocery from "./AidGrocery";
// import AidFund from "./AidFund";
import Nav from '../../Nav/Nav'






class Aid extends Component {

    socialPages = () => {
        this.props.history.push(`/aid-social?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    groceryPages = () => {
        this.props.history.push(`/aid-grocery?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }
    fundPages = () => {
        this.props.history.push(`/aid-fund?id=${this.props.reduxState.caseIdReducer[0].id}`)
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

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapReduxStateToProps)(Aid));