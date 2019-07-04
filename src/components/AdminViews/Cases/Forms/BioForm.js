import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';

class BioForm extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        // setting properties to null allow users to post null values into the database
        // which can then be edited later 
        this.setState({
            bioForm:{
                ...this.state.bioForm,
                case_id: searchObject.id,
                first_name: null,
                last_name: null,
                dob: null,
                spouse_first_name:null,
                spouse_dob:null,
                phone:null,
                encrypted: null,
                email:null,
                address:null,
                referred_by:null,
                reference_date:null,
                passport: null,
                us_id: null
            }
        })  
    }

    state= {
        bioForm: {
            case_id: '',
            first_name:'',
            last_name:'',
            dob:'',
            spouse_first_name:'',
            spouse_dob:'',
            phone:'',
            encrypted: '',
            email:'',
            address:'',
            referred_by:'',
            reference_date:'',
            passport: '',
            us_id: ''
        }
    };


    handleChange = propertyName => event => {
        this.setState({
            bioForm: {
                ...this.state.bioForm,
                [propertyName]: event.target.value,
            }
        })
    }

   next = () => {
    this.props.dispatch({ type: 'ADD_BIO', payload: this.state.bioForm })
    this.props.history.push(`/children-form?id=${this.state.bioForm.case_id}`);
   }

    backButton = () => {
    this.props.history.push(`/cases`)
  }

    render() {

        return (
            <div>
              <Nav pageName='BIO' backArrow='/cases' home='/home'/>
                <center>

                    <div className="formDivs" >
                        <label>FIRST NAME</label> 
                        <input type="text" value={this.state.bioForm.first_name || ''} onChange={this.handleChange('first_name')}/> 
                        <label>LAST NAME</label> 
                        <input type="text" value={this.state.bioForm.last_name || ''} onChange={this.handleChange('last_name')}/> 
                        <label>D.O.B</label> 
                        <input type="date" value={this.state.bioForm.dob || ''} onChange={this.handleChange('dob')} /> 
                        <label>SPOUSE NAME</label> 
                        <input type="text" value={this.state.bioForm.spouse_first_name} onChange={this.handleChange('spouse_first_name')}/> 
                            <label>SPOUSE D.O.B</label> 
                        <input type="date" value={this.state.bioForm.spouse_dob} onChange={this.handleChange('spouse_dob')}/> 

                        <label>PHONE</label> 
                        <input type="text" value={this.state.bioForm.phone || ''} onChange={this.handleChange('phone')} /> 
                        <label>ENCRYPTED</label> 
                        <input type="text" 
                        value={this.state.bioForm.encrypted || ''} onChange={this.handleChange('encrypted')} /> 
                        <label>EMAIL</label> 
                        <input type="text" 
                         value={this.state.bioForm.email || ''} onChange={this.handleChange('email')} 
                        /> 
                        <label>REGION/STATE</label> 
                        <input type="text"
                         value={this.state.bioForm.address || ''} onChange={this.handleChange('address')} /> 
                        <label>REFERRED BY</label> 
                        <input type="text" 
                        value={this.state.bioForm.referred_by || ''} onChange={this.handleChange('referred_by')}
                        /> 
                        <label>REFERENCE DATE</label> 
                        <input type="date"
                        value={this.state.bioForm.reference_date || ''} onChange={this.handleChange('reference_date')}
                        /> 
                        <label>PASSPORT</label> 
                        <select
                        onChange={this.handleChange('passport')}
                        >
                            <option defaultValue>-</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>

                        <label>USA I.D</label> 
                        <select 
                        onChange={this.handleChange(`us_id`)}
                        >
                            <option defaultValue>-</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <button className="formButton" onClick={this.next}>NEXT</button>    
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
  export default withRouter(connect(mapStateToProps)(BioForm));
