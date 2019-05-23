import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'

class FundForm extends Component {

    next = () => {
        alert(`You've created a new case!`)
        this.props.history.push('/admin-landing')
    }

    render() {
        return (
            <div>
                <Nav pageName='GOFUNDME FORM' home='/home'/>

                  <center>
                    <div className="formDivs">
                        <label>LINK</label> 
                        <input type="text" />   
                        
                        <button
                        className="formButton"
                        onClick={this.next}
                        >COMPLETE CASE</button>
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
  export default withRouter(connect(mapStateToProps)(FundForm));