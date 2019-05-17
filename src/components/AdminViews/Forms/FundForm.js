import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class FundForm extends Component {

    next = () => {
        alert(`You've created a new case!`)
        this.props.history.push('/admin-landing')
    }

    render() {
        return (
            <div>
                  <center>
                    <div>
                        <h1>
                            GO FUND ME FORM 
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>LINK</label> <br/>
                        <input type="text" />  <br/> 
                        <button
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