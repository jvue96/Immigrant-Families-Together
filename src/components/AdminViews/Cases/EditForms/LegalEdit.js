import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment';

class LegalEdit extends Component {

   
    componentDidMount () {
        const searchObject = qs.parse(this.props.location.search)
        // dispatch to get the case_id and parse into url for acccess 
        this.props.dispatch({ type: 'GET_LEGAL', payload: searchObject.id });
        this.setState({
            legalForm:{
                ...this.state.legalForm,
                case_id: searchObject.id,
                 // set state properties to become legalReducer[0] properties 
                last_court_date: this.formatDate(this.props.reduxState.legalReducer[0].last_court_date), 
                last_court_date_outcome: this.props.reduxState.legalReducer[0].last_court_date_outcome, 
                next_court_date: this.formatDate(this.props.reduxState.legalReducer[0].next_court_date), 
                /* this is the topic input field */
                next_court_date_outcome: this.props.reduxState.legalReducer[0].next_court_date_outcome, 
                asylum_application: this.props.reduxState.legalReducer[0].asylum_application, 
                work_authorization: this.props.reduxState.legalReducer[0].work_authorization, 
            }
        }) 
    }

    state = {
        legalForm: {
            case_id: '',
            last_court_date:  '',
            last_court_date_outcome: '',
            next_court_date: '', 
            /* this is the topic input field */
            next_court_date_outcome: '', 
            asylum_application: '',
            work_authorization: '',
        }
    }

    // dispatch PUT and go back to previous page 
    next = () => {
        this.props.dispatch({type:'PUT_LEGAL', payload: this.state.legalForm});
        this.props.history.push(`/edit-case?id=${this.state.legalForm.case_id}`) 
    }

    // format date from database to display correctly for inputs' defaultValues 
    formatDate = (date) => {
        let entryDate =  moment(date).format("YYYY-MM-DD"); 
        return entryDate; 
    }

    // set state properties to become input field/selectors values 
    handleChange = (propertyName) => {  
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
            <Nav pageName='LEGAL FORM' backArrow='/cases' home='/cases' />
                <center>
                    <div>
                        {this.props.reduxState.legalReducer.map((legal, index) =>

                            <div className="formDivs" key={index}>
                            <label>LAST COURT DATE</label> 
                            <input type="date" 
                            defaultValue={this.formatDate(legal.last_court_date)} 
                            onChange={this.handleChange('last_court_date')} />

                            <label>OUTCOME</label> 
                            <input type="text" 
                            defaultValue={legal.last_court_date_outcome}
                            onChange={this.handleChange('last_court_date_outcome')}
                            /> 

                            <label>NEXT COURT DATE</label> 
                            <input type="date" 
                            defaultValue={this.formatDate(legal.next_court_date)} 
                            onChange={this.handleChange('next_court_date')} />

                            <label>TOPIC</label> 
                            <input type="text"
                            defaultValue={legal.next_court_date_outcome}
                            onChange={this.handleChange('next_court_date_outcome')}
                            /> 

                            <label>ASYLUM APPLIED FOR</label> 
                            <select
                            onChange={this.handleChange('asylum_application')}
                            defaultValue={legal.asylum_application}>
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                            </select>

                            <label>WORK AUTH</label> 
                            <select
                            onChange={this.handleChange('work_authorization')}
                            defaultValue={legal.work_authorization}>
                            <option value={true}>true</option>
                            <option value={false}>false</option>
                            </select>
                        
                            <button
                            className="formButton"
                            onClick={this.next}
                            >UPDATE FORM</button>
                        </div>
                        )}
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
export default withRouter(connect(mapStateToProps)(LegalEdit));