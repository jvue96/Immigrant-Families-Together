import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'

class GroceryForm extends Component {

    next = () => {
        this.props.history.push('/fund-form')
    }

    render() {
        return (
            <div>
                <Nav pageName='GROCERY FORM' home='/home'/>

                <center>
                    <div className="formDivs">
                        <label>GROCERY PROGRAM Y/S</label> 
                        <input type="text" /> 
                        <label>CONTACT NUMBER(FOR WHO?)</label> 
                        <input type="text" /> 
                        <label>VOLUNTEER(VOLUNTEER FOR WHAT?)</label> 
                        <input type="text" /> 
                    
                        <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button>
                    </div>
                </center>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(GroceryForm));