import React, { Component } from 'react';

class CaseInfo extends Component {

    handleTimeline = () => {
        this.props.history.push('/timeline')
    }

    handleBio = () => {
        this.props.history.push('/bio')
    }

    handleLegal = () => {
        this.props.history.push('/legal')
    }

    handleAid = () => {
        this.props.history.push('/aid')
    }

    handleTeam = () => {
        this.props.history.push('/team')
    }

    handleNotes = () => {
        this.props.history.push('/notes')
    }

    

    render() {
        return (
            <div>
                <center>
                    <div>CASE INFO </div> <br/>
                    <h1>VUE, JUNO </h1> 


                    <button onClick={this.handleTimeline} >TIMELINE </button> <br/>
                    <button onClick={this.handleBio}> BIO</button> <br/>
                    <button onClick={this.handleLegal}> LEGAL</button> <br/>
                    <button onClick={this.handleAid}> AID </button> <br/>
                    <button onClick={this.handleTeam}> TEAM </button> <br/>
                    <button onClick={this.handleNotes}> NOTES </button> <br/>
                </center>
            </div>
        );
    }
}

export default CaseInfo;