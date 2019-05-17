import React, { Component } from 'react';

class Cases extends Component {

    addCase = () => {
        this.props.history.push('/bio-form')
    }
 
    viewCase = () => {
        this.props.history.push('/case-list')
    }
 
    editCase = () => {
        this.props.history.push('/edit-list')
    }

    render() {
        return (
            <div>
                 <center>
                   <div>
                       <h1>CASES MANAGEMENT</h1>
                   </div>

                   <button className="adminMenuButtons"
                    onClick={this.viewCase}
                   >VIEW CASES</button> <br />

                   <button className="adminMenuButtons"
                   onClick={this.addCase}
                   >ADD NEW CASE</button> <br/>

                   <button className="adminMenuButtons"
                   onClick={this.editCase}
                   >EDIT EXISTING CASE</button> <br />
               </center>
                
            </div>
        );
    }
}

export default Cases;