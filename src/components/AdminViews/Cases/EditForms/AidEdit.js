import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class AidEdit extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('aidForm searchObject', searchObject);
        this.props.dispatch({ type: 'GET_AID', payload: searchObject.id });
        this.setState({
            aidForm:{
                ...this.state.aidForm,
                case_id: searchObject.id,
            }
        }) 
    }

    state = {
        aidForm: {
            case_id: this.props.reduxState.caseReducer.rows[0].id,
            grocery_program: '',
            grocery_program_volunteer: '',
            go_fund_me: '',
            social_worker: '',
            social_worker_phone: ''
        }
    }

    next = () => {
        this.props.dispatch({type:'PUT_AID', payload: this.state.aidForm});
        this.props.history.push(`/edit-case?id=${this.state.aidForm.case_id}`)
        console.log(this.state);   
    }

    handleChange = propertyName => event => {
        console.log(`handleChange has been fired with this propertyName:`, [propertyName]);

        this.setState({
            aidForm: { 
                ...this.state.aidForm,
                [propertyName]: event.target.value,
            }
        })        
        
          if(this.state.aidForm.grocery_program === "") {
            this.setState({
                aidForm: {
                    ...this.state.aidForm,
                    grocery_program: this.props.reduxState.aidReducer[0].grocery_program,
                }
            })
            
        } else if (this.state.aidForm.grocery_program_volunteer === "") {
            this.setState({
                aidForm: {
                    ...this.state.aidForm,
                    grocery_program_volunteer: this.props.reduxState.aidReducer[0].grocery_program_volunteer,
                }
            })
        } else if (this.state.aidForm.go_fund_me === "") {
            this.setState({
                aidForm: {
                    ...this.state.aidForm,
                    go_fund_me: this.props.reduxState.aidReducer[0].go_fund_me,
                }
            })
        } else if (this.state.aidForm.social_worker === "") {
            this.setState({
                aidForm: {
                    ...this.state.aidForm,
                    social_worker: this.props.reduxState.aidReducer[0].social_worker,
                }
            })
        }  else if (this.state.aidForm.social_worker_phone === "") {
            this.setState({
                aidForm: {
                    ...this.state.aidForm,
                    social_worker_phone: this.props.reduxState.aidReducer[0].social_worker_phone,
                }
            })
        }
        console.log(`this is state after handleChange:`, this.state);
    }
    
    render() {
        return (
            <div>
            <Nav pageName='AID FORM' backArrow='/cases' home='/cases' />
            
                <center>
                    {JSON.stringify(this.props.reduxState.aidReducer)}
                <div>
                {this.props.reduxState.aidReducer.map(aid =>
                    <div className="formDivs">
                        
                        <label>GROCERY PROGRAM</label>
                        <input type="text"
                        defaultValue={aid.grocery_program}
                        onChange={this.handleChange('grocery_program')}/>
                        
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