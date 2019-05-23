import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav/Nav'

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
               </center>
                
            </div>
        );
    }
}

export default Cases;