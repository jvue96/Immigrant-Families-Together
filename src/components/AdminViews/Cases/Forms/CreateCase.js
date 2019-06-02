import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
class CreateCase extends Component {
    
    next = (event) => {
        this.props.dispatch({ type: 'ADD_CASE', payload: this.state.caseForm })
        console.log('event.currentTarget.value', this.state.caseForm.case_number);
        
        //move into new will update method
        // this.props.history.push(`/bio-form?id=${this.state.caseForm.case_number}`)
    }

    state = {
        caseForm: {
            case_last_name: '',
            case_number: '',
            status: 'ACTIVE',
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.reduxState.caseReducer !== prevProps.reduxState.caseReducer) {
        this.props.history.push(`/bio-form?id=${this.props.reduxState.caseReducer.rows[0].id}`)
    }
}

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            caseForm: {
                case_last_name: 'Rodriguez(Jose)',
                case_number: 'TX17542',
                status: 'ACTIVE',
            }
        })
      }

    handleChange = propertyName => event => {
        console.log(`handleChange has been fired with this propertyName:`, propertyName);
    
        this.setState({
            caseForm: {
                ...this.state.caseForm,
                [propertyName]: event.target.value,
            }
        })
        console.log(`this is state after handleChange:`, this.state.caseForm);
        
    }
    
    render() {
        return (
            <div>
                <Nav pageName='CREATE CASE' home='/home' /> 
                <center>
                  <button className="hiddenButton" onClick={this.autoPopulate}>FILL INFO</button> 
                    <div className="formDivs">
        
                        <label>LAST NAME</label> <br/>
                        <input type="text"
                        value={this.state.caseForm.case_last_name}
                        onChange={this.handleChange('case_last_name')}/> <br/>
                        
                        <label>CASE NUMBER</label> <br/>
                        <input type="text"
                        value={this.state.caseForm.case_number}
                        onChange={this.handleChange('case_number')}/> <br/>
      
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

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });
  
  // this allows us to use <App /> in index.js
export default withRouter(connect(mapReduxStateToProps)(CreateCase));