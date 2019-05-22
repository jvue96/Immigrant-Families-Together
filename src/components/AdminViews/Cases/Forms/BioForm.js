import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import qs from 'query-string';

class BioForm extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('searchObject', searchObject);
        this.setState({
            bioForm:{
                ...this.state.bioForm,
                case_id: searchObject.id,
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
            passport: false,
            us_id: false,


        }
    }

    autoPopulate=()=>{
        const searchObject = qs.parse(this.props.location.search)
        console.log('searchObject', searchObject);
        console.log('in autoPopulate')
        this.setState({
            bioForm: {
                case_id: searchObject.id,
                first_name:'Mary',
                last_name:'Mosman',
                dob:'07/04/1982',
                spouse_first_name:'Rick',
                spouse_dob:'10/31/1976',
                phone:'555-555-5555',
                encrypted: 'MosStar',
                email:'MMosman@gmail.com',
                address:'333 Spruce St Burnsville MN',
                referred_by:'John Doe',
                reference_date:'05/01/2019',
                passport: false,
                us_id: false,
            }
        })
      }

    handleChange = propertyName => event => {
        console.log(`this is the propertyName:`, propertyName);
        console.log(`this is target value:`, event.target.value)
        this.setState({
            bioForm: {
                ...this.state.bioForm,
                [propertyName]: event.target.value,
            }
        })
        console.log(`this is state after handleChange:`, this.state)
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
                {JSON.stringify(this.state)}
                <div className="nav">
                <div className="navLeft" onClick={this.backButton}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">BIO</h2>
                </div>
                <div className="navRight">
                <Link to="/home">
                    <i class="fas fa-home"></i>
                </Link>
                </div>
                </div>
                
                <center>
                    <div>
                        <h1>
                            BIO FORM
                        </h1>
                    </div>
                    <div className="formDivs" >
                        <label>FIRST NAME</label> 
                        <input type="text" value={this.state.bioForm.first_name} onChange={this.handleChange('first_name')}/> 
                        <label>LAST NAME</label> 
                        <input type="text" value={this.state.bioForm.last_name} onChange={this.handleChange('last_name')}/> 
                        <label>D.O.B</label> 
                        <input type="date" value={this.state.bioForm.dob} onChange={this.handleChange('dob')} /> 
                        <label>SPOUSE NAME</label> 
                        <input type="text" value={this.state.bioForm.spouse_first_name} onChange={this.handleChange('spouse_first_name')}/> 
                        <label>SPOUNSE D.O.B</label> 
                        <input type="date" value={this.state.bioForm.spouse_dob} onChange={this.handleChange('spouse_dob')}/> 
                        <label>PHONE</label> 
                        <input type="text" value={this.state.bioForm.phone} onChange={this.handleChange('phone')} /> 
                        <label>ENCRYPTED</label> 
                        <input type="text" 
                        value={this.state.bioForm.encrypted} onChange={this.handleChange('encrypted')} /> 
                        <label>EMAIL</label> 
                        <input type="text" 
                         value={this.state.bioForm.email} onChange={this.handleChange('email')} 
                        /> 
                        <label>ADDRESS</label> 
                        <input type="text"
                         value={this.state.bioForm.address} onChange={this.handleChange('address')} /> 
                        <label>REFERRED BY</label> 
                        <input type="text" 
                        value={this.state.bioForm.referred_by} onChange={this.handleChange('referred_by')}
                        /> 
                        <label>REFERENCE DATE</label> 
                        <input type="date"
                        value={this.state.bioForm.reference_date} onChange={this.handleChange('reference_date')}
                        /> 
                        <label>PASSPORT Y/N</label> 
                        <select
                        onChange={this.handleChange('passport')}
                        >
                            <option></option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <label>USA I.D Y/N</label> 
                        <select 
                        onChange={this.handleChange(`us_id`)}
                        >
                            <option></option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <button className="formButton" onClick={this.next}>NEXT</button>
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
  export default withRouter(connect(mapStateToProps)(BioForm));
