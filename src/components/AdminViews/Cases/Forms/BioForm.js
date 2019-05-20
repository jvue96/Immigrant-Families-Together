import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class BioForm extends Component {

    state= {
        bioForm: {
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
       this.props.history.push('/medical-form');

   }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            BIO FORM
                        </h1>
                    </div>
                    <div className="formDivs" >
                        <label>FIRST NAME</label> <br />
                        <input type="text" value={this.state.bioForm.first_name} onChange={this.handleChange('first_name')}/> <br />
                        <label>LAST NAME</label> <br />
                        <input type="text" value={this.state.bioForm.last_name} onChange={this.handleChange('last_name')}/> <br />
                        <label>D.O.B</label> <br />
                        <input type="text" value={this.state.bioForm.dob} onChange={this.handleChange('dob')} /> <br />
                        <label>SPOUSE NAME</label> <br />
                        <input type="text" value={this.state.bioForm.spouse_first_name} onChange={this.handleChange('spouse_first_name')}/> <br />
                        <label>SPOUNSE D.O.B</label> <br />
                        <input type="text" value={this.state.bioForm.spouse_dob} onChange={this.handleChange('spouse_dob')}/> <br />
                        <label>PHONE</label> <br />
                        <input type="text" value={this.state.bioForm.phone} onChange={this.handleChange('phone')} /> <br />
                        <label>ENCRYPTED</label> <br />
                        <input type="text" 
                        value={this.state.bioForm.encrypted} onChange={this.handleChange('encrypted')} /> <br />
                        <label>EMAIL</label> <br />
                        <input type="text" 
                         value={this.state.bioForm.email} onChange={this.handleChange('email')} 
                        /> <br />
                        <label>ADDRESS</label> <br />
                        <input type="text"
                         value={this.state.bioForm.address} onChange={this.handleChange('address')} /> <br />
                        <label>REFERRED BY</label> <br />
                        <input type="text" 
                        value={this.state.bioForm.referred_by} onChange={this.handleChange('referred_by')}
                        /> <br />
                        <label>REFERENCE DATE</label> <br />
                        <input type="text"
                        value={this.state.bioForm.reference_date} onChange={this.handleChange('reference_date')}
                        /> <br />
                        <label>PASSPORT Y/N</label> <br />
                        <select
                        onChange={this.handleChange('passport')}
                        >
                            <option></option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select><br />
                        <label>USA I.D Y/N</label> <br />
                        <select 
                        onChange={this.handleChange(`us_id`)}
                        >
                            <option></option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select><br />
                        <button className="formButton" onClick={this.next}>NEXT</button> 
                        <br/>
                    </div>
                </center>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    user: state.user,
  });
  export default withRouter(connect(mapStateToProps)(BioForm));