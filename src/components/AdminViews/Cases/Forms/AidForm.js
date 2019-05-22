import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
class AidForm extends Component {
    // componentDidMount = () => {
    //     this.props.dispatch({ type: 'GET_AID_FORM' });
    // }
    next = () => {
        this.props.dispatch({ type: 'ADD_AID', payload: this.state.aidForm })
        this.props.history.push('/medical-form')
    }

    state = {
        aidForm: {
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
                <Nav />
                <center>
                    <div className="formDivs">
                        
                        <label>GROCERY PROGRAM</label>
                        <input type="text"
                        value={this.state.aidForm.grocery_program}
                        onChange={this.handleChange('grocery_program')}/>
                        
                        <label>GROCERY PROGRAM VOLUNTEER</label>
                        <input type="text"
                        value={this.state.aidForm.grocery_program_volunteer}
                        onChange={this.handleChange('grocery_program_volunteer')}/> 
                    
                        <label>GOFUNDME</label> 
                        <input type="text"
                        value={this.state.aidForm.go_fund_me}
                        onChange={this.handleChange('go_fund_me')}/> 

                        <label>SOCIAL WORKER</label> 
                        <input type="text"
                        value={this.state.aidForm.social_worker}
                        onChange={this.handleChange('social_worker')}/> 
                        
                        <label>SOCIAL WORKER PHONE</label> 
                        <input type="text" 
                        value={this.state.aidForm.social_worker_phone}
                        onChange={this.handleChange('social_worker_phone')}/> 
                        
                        
                        
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

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(AidForm));