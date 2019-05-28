import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment';

class LegalEdit extends Component {

    componentDidMount () {
        const searchObject = qs.parse(this.props.location.search)
        console.log('legalForm searchObject', searchObject);
        this.props.dispatch({ type: 'GET_LEGAL', payload: searchObject.id });
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

    next = () => {
        // this.props.dispatch({type:'PUT_AID', payload: this.state.aidForm});
        // this.props.history.push(`/edit-case?id=${this.state.aidForm.case_id}`)
        console.log(this.state);   
    }

    // format date from database to display correctly for inputs' defaultValues 
    formatDate = (date) => {
        let entryDate =  moment(date).format("YYYY-MM-DD"); 
        return entryDate; 
    }

    // set state for onChange of textfields 
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
                    {/* {JSON.stringify(this.props.reduxState.legalReducer)} */}
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
                        <input type="text" 
                        placeholder="type true or false"
                        defaultValue={legal.asylum_application}
                        onChange={this.handleChange('asylum_application')}
                        /> 

                        <label>WORK AUTH</label> 
                        <input type="text" 
                        placeholder="type true or false"
                        defaultValue={legal.work_authorization}
                        onChange={this.handleChange('work_authorization')}
                        /> 
                    
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