import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'


class FosterForm extends Component {

    next = () => {
        this.props.history.push('/attorney-form')
    }

    render() {
        return (
            <div>
                <Nav pageName='FOSTER FORM' home='/home'/>

                <center>

                    <div className="formDivs">
                        <label>FOSTER FACILITY</label> 
                        <input type="text" /> 
                        <label>ADDRESS</label> 
                        <input type="text" /> 
                        <label>PHONE</label> 
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
  export default withRouter(connect(mapStateToProps)(FosterForm));