import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import qs from 'query-string';

class AidForm extends Component {
    
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('aidForm searchObject', searchObject);
        this.setState({
            aidForm:{
                ...this.state.aidForm,
                case_id: searchObject.id,
            }
        })  
    }

    next = () => {
        this.props.dispatch({ type: 'ADD_AID', payload: this.state.aidForm })
        this.props.history.push(`/school-form?id=${this.state.aidForm.case_id}`)
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

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            aidForm: {
                case_id: this.props.reduxState.caseReducer.rows[0].id,
                grocery_program: true,
                grocery_program_volunteer: 'Juno Vue',
                go_fund_me: 'www.gofundme.com/CHF4567644',
                social_worker: 'Joe Schdedyghtesz',
                social_worker_phone: '763-555-7542'
            }
        })
      }

    handleChange = propertyName => event => {
        console.log(`handleChange has been fired with this propertyName:`, propertyName);
        
        this.setState({
            aidForm: {
                ...this.state.aidForm,
                [propertyName]: event.target.value,
            }
        })
        console.log(`this is state after handleChange:`, this.state);
        
    }
    
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            AID FORM 
                        </h1>
                    </div>
                    <div className="formDivs">
                        
                        <label>GROCERY PROGRAM</label> <br/>
                        <input type="text"
                        value={this.state.aidForm.grocery_program}
                        onChange={this.handleChange('grocery_program')}/> <br/>
                        
                        <label>GROCERY PROGRAM VOLUNTEER</label> <br/>
                        <input type="text"
                        value={this.state.aidForm.grocery_program_volunteer}
                        onChange={this.handleChange('grocery_program_volunteer')}/> <br/>
                    
                        <label>GOFUNDME</label> <br/>
                        <input type="text"
                        value={this.state.aidForm.go_fund_me}
                        onChange={this.handleChange('go_fund_me')}/> <br/>

                        <label>SOCIAL WORKER</label> <br/>
                        <input type="text"
                        value={this.state.aidForm.social_worker}
                        onChange={this.handleChange('social_worker')}/> <br/>
                        
                        <label>SOCIAL WORKER PHONE</label> <br/>
                        <input type="text" 
                        value={this.state.aidForm.social_worker_phone}
                        onChange={this.handleChange('social_worker_phone')}/> <br/>
                        
                        
                        
                        <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button>
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
  export default withRouter(connect(mapStateToProps)(AidForm));