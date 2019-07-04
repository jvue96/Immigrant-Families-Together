import React, { Component } from 'react';
import Nav from '../../Nav/Nav'

class Cases extends Component {

    addCase = () => {
        this.props.history.push('/create-case')
    }
 
    viewCase = () => {
        this.props.history.push('/case-list')
    }
 
    editCase = () => {
        this.props.history.push('/edit-list')
    }

    closeCase = () => {
        this.props.history.push('/close-list')
    }

    render() {
        return (
            <div>
                <Nav pageName='CASES MANAGEMENT' home='/home'/>


                
                 <center>

                   <button className="adminMenuButtons"
                    onClick={this.viewCase}
                   >VIEW CASES</button> 

                   <button className="adminMenuButtons"
                   onClick={this.addCase}
                   >ADD NEW CASE</button> 

                   <button className="adminMenuButtons"
                   onClick={this.editCase}
                   >EDIT EXISTING CASE</button> 

                    <button className="adminMenuButtons"
                   onClick={this.closeCase}
                   >CLOSE CASE</button> 
               </center>
                
            </div>
        );
    }
}

export default Cases;