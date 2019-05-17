import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class LegalStatusForm extends Component {

    next = () => {
        this.props.history.push('/social-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            LEGAL STATUS FORM
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>LAST COURT DATE</label> <br/>
                        <input type="text" /> <br/>
                        <label>OUTCOME</label> <br/>
                        <input type="text" /> <br/>
                        <label>NEXT COURT DATE</label> <br/>
                        <input type="text" /> <br/>
                        <label>TOPIC</label> <br/>
                        <input type="text" /> <br/>
                        <label>ASYLUM APPLIED FOR</label> <br/>
                        <input type="text" /> <br/>
                        <label>WORK AUTH</label> <br/>
                        <input type="text" /> <br/>
                    
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
  export default withRouter(connect(mapStateToProps)(LegalStatusForm));