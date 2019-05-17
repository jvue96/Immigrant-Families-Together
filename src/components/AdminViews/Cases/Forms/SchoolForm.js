import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SchoolForm extends Component {

    next = () => {
        this.props.history.push('/housing-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            SCHOOL
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>SCHOOL NAME</label> <br/>
                        <input type="text" /> <br/>
                        <label>SCHOOL CONTACT</label> <br/>
                        <input type="text" /> <br/>
                        <label>PHONE NUMBER</label> <br/>
                        
                        <input type="text" /> <br/>
                        <button
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
  export default withRouter(connect(mapStateToProps)(SchoolForm));