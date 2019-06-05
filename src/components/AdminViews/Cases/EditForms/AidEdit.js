import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class AidEdit extends Component {

    //on the load of the page check the query string in the url and pull the id
    //use the id to dispatch all the aid information for that specific file
    //set the state to put that id in as case_id
    //conditional statement to check if the reducer has any values
    //if the reducer is empty then render a blank form
    //also if empty change from the button being a POST instead of a PUT
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_AID', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.aidReducer.length === 0) {
            this.setState({
                aidForm:{
                    ...this.state.aidForm,
                    case_id: searchObject.id,
                    grocery_program: null, 
                    grocery_program_volunteer: null, 
                    go_fund_me: null, 
                    social_worker: null, 
                    social_worker_phone: null, 
                    data: false, 
                }
            }) 
        } else {
        this.setState({
            aidForm:{
                ...this.state.aidForm,
                case_id: searchObject.id,
                grocery_program: this.props.reduxState.aidReducer[0].grocery_program, 
                grocery_program_volunteer: this.props.reduxState.aidReducer[0].grocery_program_volunteer, 
                go_fund_me: this.props.reduxState.aidReducer[0].go_fund_me, 
                social_worker: this.props.reduxState.aidReducer[0].social_worker, 
                social_worker_phone: this.props.reduxState.aidReducer[0].social_worker_phone, 
                data: true, 
                }
            }) 
        }
    }

    state = {
        aidForm: {
            case_id: '',
            grocery_program: '',
            grocery_program_volunteer: '',
            go_fund_me: '',
            social_worker: '',
            social_worker_phone: '',
            data: '', 
        }
    }

    // conditional to determine a POST or a PUT 
    next = () => {
        if (this.state.aidForm.data === false) {
            this.props.dispatch({ type: 'ADD_AID', payload: this.state.aidForm })
        } else (
            this.props.dispatch({ type: 'PUT_AID', payload: this.state.aidForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.aidForm.case_id}`) 
    }

    handleChange = propertyName => event => {
        this.setState({
            aidForm: { 
                ...this.state.aidForm,
                [propertyName]: event.target.value,
            }
        })        
    }
    
    render() {

        // if the reducer is empty, display input with null values to edit 
        let checkAid; 
        let state = this.state.aidForm; 
        if(this.props.reduxState.aidReducer.length === 0) {
            checkAid = <div className="formDivs">            
                            <label>GROCERY PROGRAM</label>
                            <select 
                            defaultValue={state.grocery_program}
                            onChange={this.handleChange(`grocery_program`)}
                            >
                                <option>True or False </option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>
                            
                            <label>GROCERY PROGRAM VOLUNTEER</label>
                            <input type="text"
                            defaultValue={state.grocery_program_volunteer}
                            onChange={this.handleChange('grocery_program_volunteer')}/> 
                        
                            <label>GOFUNDME</label> 
                            <input type="text"
                            defaultValue={state.go_fund_me}
                            onChange={this.handleChange('go_fund_me')}/> 

                            <label>SOCIAL WORKER</label> 
                            <input type="text"
                            defaultValue={state.social_worker}
                            onChange={this.handleChange('social_worker')}/> 
                            
                            <label>SOCIAL WORKER PHONE</label> 
                            <input type="text" 
                            defaultValue={state.social_worker_phone}
                            onChange={this.handleChange('social_worker_phone')}/> 
                            
                            <button
                            className="formButton"
                            onClick={this.next}
                            >UPDATE FORM</button>
                        </div>
        }

        return (
            <div>
            <Nav pageName='AID FORM' backArrow='/cases' home='/cases' />
            
                <center>
                    {/* {JSON.stringify(this.props.reduxState.aidReducer)} */}
                <div>
                {checkAid}
                {/* mapo over the aid reducer to display all values */}
                {this.props.reduxState.aidReducer.map((aid, index) =>

                    <div className="formDivs" key={index}>
                        
                        <label>GROCERY PROGRAM</label>
                        <select 
                        defaultValue={aid.grocery_program}
                        onChange={this.handleChange(`grocery_program`)}
                        >
                            <option>True or False </option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        
                        <label>GROCERY PROGRAM VOLUNTEER</label>
                        <input type="text"
                        defaultValue={aid.grocery_program_volunteer}
                        onChange={this.handleChange('grocery_program_volunteer')}/> 
                    
                        <label>GOFUNDME</label> 
                        <input type="text"
                        defaultValue={aid.go_fund_me}
                        onChange={this.handleChange('go_fund_me')}/> 

                        <label>SOCIAL WORKER</label> 
                        <input type="text"
                        defaultValue={aid.social_worker}
                        onChange={this.handleChange('social_worker')}/> 
                        
                        <label>SOCIAL WORKER PHONE</label> 
                        <input type="text" 
                        defaultValue={aid.social_worker_phone}
                        onChange={this.handleChange('social_worker_phone')}/> 
                        
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
export default withRouter(connect(mapStateToProps)(AidEdit));