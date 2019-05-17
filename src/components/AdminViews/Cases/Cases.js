import React, { Component } from 'react';

class Cases extends Component {

    addCase = () => {
        this.props.history.push('/bio-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>CASES MANAGEMENT</h1>
                    </div>
                    <button className="caseManagementDivs">VIEW CASES</button> <br />
                    <button className="caseManagementDivs"
                    onClick={this.addCase}
                    >ADD NEW CASE</button> <br/> 

                    <button className="caseManagementDivs">EDIT EXISTING CASE</button> <br /> 
                </center>
                
            </div>
        );
    }
}

export default Cases;