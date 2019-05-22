import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class FosterForm extends Component {

    next = () => {
        this.props.history.push('/attorney-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            FOSTER FORM
                        </h1>
                    </div>
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