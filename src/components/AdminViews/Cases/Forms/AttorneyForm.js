import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class AttorneyForm extends Component {

    next = () => {
        this.props.history.push('/legal-form')
    }

    render() {
        return (
            <div>
                 <center>
                    <div>
                        <h1>
                            ATTORNEY FORM
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>NAME</label> 
                        <input type="text" /> 
                        <label>PHONE</label> 
                        <input type="text" /> 
                        <label>EMAIL</label> 
                        <input type="text" /> 
                        <label>FEE</label> 
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
  export default withRouter(connect(mapStateToProps)(AttorneyForm));