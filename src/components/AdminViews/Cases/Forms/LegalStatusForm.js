import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'query-string';

class LegalStatusForm extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('legalForm searchObject', searchObject);
        this.setState({
            legalForm:{
                ...this.state.legalForm,
                case_id: searchObject.id,
            }
        })  
    }

    state = {
        legalForm: {
            case_id: this.props.reduxState.caseReducer.rows[0].id,
            last_court_date: '',
            last_court_date_outcome: '',
            next_court_date: '', 
            /* this is the topic input field */
            next_court_date_outcome: '', 
            asylum_application: '',
            work_authorization: '',
        }
    }

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            legalForm: {
                case_id: this.props.reduxState.caseReducer.rows[0].id,
                last_court_date: '2019-12-12',
                last_court_date_outcome: 'deferment',
                next_court_date: '2019-12-12', 
                next_court_date_outcome: 'sentancing', 
                asylum_application: false,
                work_authorization: false,
            }
        })
      }

    next = () => {
        //this.props.history.push('/social-form')
        this.props.history.push(`/admin-landing?id=${this.state.legalForm.case_id}`);
        console.log(this.state);   
        this.props.dispatch({ type: 'ADD_LEGAL', payload: this.state.legalForm })

    }

     // set state for onChange of textfields 
     handleNameChange = (propertyName) => {  
        return(event) =>{
        this.setState({
            legalForm: {
                ...this.state.legalForm, 
                [propertyName]: event.target.value,
                }
            });
        }    
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
                        <input 
                        value={this.state.legalForm.last_court_date}
                        placeholder="date format: 2019-12-12"
                        onChange={this.handleNameChange('last_court_date')}
                        type="text" /> <br/>

                        <label>OUTCOME</label> <br/>
                        <input type="text" 
                         value={this.state.legalForm.last_court_date_outcome}
                         onChange={this.handleNameChange('last_court_date_outcome')}
                        /> <br/>

                        <label>NEXT COURT DATE</label> <br/>
                        <input type="text" 
                        value={this.state.legalForm.next_court_date}
                        placeholder="date format: 2019-12-12"
                        onChange={this.handleNameChange('next_court_date')}
                        /> <br/>

                        <label>TOPIC</label> <br/>
                        <input type="text"
                         value={this.state.legalForm.next_court_date_outcome}
                         onChange={this.handleNameChange('next_court_date_outcome')}
                        /> <br/>

                        <label>ASYLUM APPLIED FOR</label> <br/>
                        <input type="text" 
                          placeholder="type true or false"
                          value={this.state.legalForm.asylum_application}
                          onChange={this.handleNameChange('asylum_application')}
                        /> <br/>

                        <label>WORK AUTH</label> <br/>
                        <input type="text" 
                        placeholder="type true or false"
                        value={this.state.legalForm.work_authorization}
                        onChange={this.handleNameChange('work_authorization')}
                        /> <br/>
                    
                        {/* <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button> */}
 
                        <button
                        className="formButton"
                        onClick={this.next}
                        >COMPLETE CASE</button>

                    <button className="formButton" onClick={this.autoPopulate}>FILL INFO</button> 
                    </div>
                </center>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(LegalStatusForm));