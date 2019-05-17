import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class BondForm extends Component {

    next = () => {
        this.props.history.push('/foster-form')
    }

    render() {
        return (
            <div>
                 <center>
                    <div>
                        <h1>
                            BOND FORM
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>BOND AMOUNT</label> <br/>
                        <input type="text" /> <br/>
                        <label>DATE PAID</label> <br/>
                        <input type="text" /> <br/>
                        <label>PAID BY</label> <br/>
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
  export default withRouter(connect(mapStateToProps)(BondForm));