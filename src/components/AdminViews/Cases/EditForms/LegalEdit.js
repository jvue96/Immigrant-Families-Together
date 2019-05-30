import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment';

class LegalEdit extends Component {

   
    componentDidMount () {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_LEGAL', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.legalReducer.length === 0) {
            this.setState({
                legalForm:{
                    ...this.state.legalForm,
                    case_id: searchObject.id,
                    last_court_date: null,
                    last_court_date_outcome: null,
                    next_court_date: null,
                    /* this is the topic input field */
                    next_court_date_outcome: null,
                    asylum_application: null,
                    work_authorization: null,
                    data: false, 
                }
            }) 
        } else {
        this.setState({
            legalForm:{
                ...this.state.legalForm,
                case_id: searchObject.id,
                last_court_date: this.props.reduxState.legalReducer[0].last_court_date, 
                last_court_date_outcome: this.props.reduxState.legalReducer[0].last_court_date_outcome, 
                next_court_date: this.props.reduxState.legalReducer[0].next_court_date, 
                /* this is the topic input field */
                next_court_date_outcome: this.props.reduxState.legalReducer[0].next_court_date_outcome, 
                asylum_application: this.props.reduxState.legalReducer[0].asylum_application, 
                work_authorization: this.props.reduxState.legalReducer[0].work_authorization, 
                data: true, 
                }
            }) 
        }
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
            data: '', 
        }
    }

    // dispatch PUT and go back to previous page 
    next = () => {
        if (this.state.legalForm.data === false) {
            this.props.dispatch({ type: 'ADD_LEGAL', payload: this.state.legalForm })
        } 
        else (
            this.props.dispatch({ type: 'PUT_LEGAL', payload: this.state.legalForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.legalForm.case_id}`) 
        console.log(this.state.legalForm);
        
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

        // if the reducer is empty, display input with null values to edit 
        let checkLegal; 
        let state = this.state.legalForm; 
        if(this.props.reduxState.legalReducer.length === 0) {
            checkLegal = <div className="formDivs">
                            <label>LAST COURT DATE</label> 
                            <input type="date" 
                            defaultValue={this.formatDate(state.last_court_date)} 
                            onChange={this.handleChange('last_court_date')} />

                            <label>OUTCOME</label> 
                            <input type="text" 
                            defaultValue={state.last_court_date_outcome}
                            onChange={this.handleChange('last_court_date_outcome')}
                            /> 

                            <label>NEXT COURT DATE</label> 
                            <input type="date" 
                            defaultValue={this.formatDate(state.next_court_date)} 
                            onChange={this.handleChange('next_court_date')} />

                            <label>TOPIC</label> 
                            <input type="text"
                            defaultValue={state.next_court_date_outcome}
                            onChange={this.handleChange('next_court_date_outcome')}
                            /> 

                            <label>ASYLUM APPLIED FOR</label> 
                            <select
                            onChange={this.handleChange('asylum_application')}
                            defaultValue={state.asylum_application}>
                            <option >True or False </option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                            </select>

                            <label>WORK AUTH</label> 
                            <select
                            onChange={this.handleChange('work_authorization')}
                            defaultValue={state.work_authorization}>
                            <option >True or False </option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                            </select>
                        
                            <button
                            className="formButton"
                            onClick={this.next}
                            >UPDATE FORM</button>
                        </div>
                        }

        return (
            <div>
            <Nav pageName='LEGAL FORM' backArrow='/cases' home='/cases' />
                <center>
                    <div>
                        {checkLegal}
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
                            <option >True or False </option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                            </select>

                            <label>WORK AUTH</label> 
                            <select
                            onChange={this.handleChange('work_authorization')}
                            defaultValue={legal.work_authorization}>
                            <option >True or False </option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
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