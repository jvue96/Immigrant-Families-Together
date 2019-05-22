import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

    render() {
        return (
            <div>

                <div className="nav">
                <div className="navLeft2" onClick={this.backButton}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">CASES MANAGEMENT</h2>
                </div>
                <div className="navRight">
                <Link to="/home">
                    <i className="fas fa-home"></i>
                </Link>
                </div>
                </div>

                
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