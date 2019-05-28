import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';

class BioEdit extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('searchObject', searchObject);
        this.props.dispatch({ type: 'GET_BIO_INFO', payload: searchObject.id });
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
            passport: true,
            us_id: true,
        }
    };

    handleChange = propertyName => event => {
        console.log(`this is the propertyName:`, propertyName);
        console.log(`this is target value:`, event.target.value)
        this.setState({
            bioForm: {
                ...this.state.bioForm,
                [propertyName]: event.target.value,
            }
        })
        if(this.state.bioForm.first_name === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    first_name: this.props.reduxState.bioReducer[0].first_name,
                }
            })
            
        } else if (this.state.bioForm.last_name === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    last_name: this.props.reduxState.bioReducer[0].last_name,
                }
            })
        } else if (this.state.bioForm.dob === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    dob: this.props.reduxState.bioReducer[0].dob,
                }
            })
        } else if (this.state.bioForm.spouse_first_name === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    spouse_first_name: this.props.reduxState.bioReducer[0].spouse_first_name,
                }
            })
        }  else if (this.state.bioForm.spouse_dob === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    spouse_dob: this.props.reduxState.bioReducer[0].spouse_dob,
                }
            })
        } else if (this.state.bioForm.phone === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    phone: this.props.reduxState.bioReducer[0].phone,
                }
            })
        } else if (this.state.bioForm.encrypted === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    encrypted: this.props.reduxState.bioReducer[0].encrypted,
                }
            })
        } else if (this.state.bioForm.email === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    email: this.props.reduxState.bioReducer[0].email,
                }
            })
        } else if (this.state.bioForm.address === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    address: this.props.reduxState.bioReducer[0].address,
                }
            })
        } else if (this.state.bioForm.referred_by === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    referred_by: this.props.reduxState.bioReducer[0].referred_by,
                }
            })
        } else if (this.state.bioForm.reference_date === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    reference_date: this.props.reduxState.bioReducer[0].reference_date,
                }
            })
        } else if (this.state.bioForm.passport === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    passport: this.props.reduxState.bioReducer[0].passport,
                }
            })
        } else if (this.state.bioForm.us_id === "") {
            this.setState({
                bioForm: {
                    ...this.state.bioForm,
                    us_id: this.props.reduxState.bioReducer[0].us_id,
                }
            })
        }
        console.log(`this is state after handleChange:`, this.state);
    }

   next = () => {
    this.props.dispatch({type:'PUT_BIO', payload: this.state.bioForm});
    this.props.history.push(`/edit-case?id=${this.state.bioForm.case_id}`)
    console.log(this.state);
   }

    backButton = () => {
    this.props.history.push(`/cases`)
  }

    render() {

        return (
            <div>
                <Nav pageName='BIO' backArrow='/cases' home='/home'/>

                {JSON.stringify(this.props.reduxState.bioReducer)}

                {JSON.stringify(this.state.bioForm)}
                <center>
                    <div>
                        <h1>
                            BIO FORM
                        </h1>
                    </div>
                    {this.props.reduxState.bioReducer.map(bio =>
                    <div className="formDivs" >
                        <label>FIRST NAME</label> 
                        <input type="text" 
                        defaultValue={bio.first_name}
                        onChange={this.handleChange('first_name')}/> 

                        <label>LAST NAME</label> 
                        <input type="text"
                        defaultValue={bio.last_name}
                        onChange={this.handleChange('last_name')}/> 

                        <label>D.O.B</label> 
                        <input type="text"
                        defaultValue={bio.dob}
                        onChange={this.handleChange('dob')} />

                        <label>SPOUSE NAME</label> 
                        <input type="text"
                        defaultValue={bio.spouse_first_name}
                        onChange={this.handleChange('spouse_first_name')}/> 

                        <label>SPOUSE D.O.B</label> 
                        <input type="text"
                        defaultValue={bio.spouse_dob}
                        onChange={this.handleChange('spouse_dob')}/> 

                        <label>PHONE</label> 
                        <input type="text"
                        defaultValue={bio.phone}
                        onChange={this.handleChange('phone')} /> 

                        <label>ENCRYPTED</label> 
                        <input type="text" 
                        defaultValue={bio.encrypted}
                        onChange={this.handleChange('encrypted')} />

                        <label>EMAIL</label> 
                        <input type="text" 
                        defaultValue={bio.email}
                        onChange={this.handleChange('email')} />

                        <label>ADDRESS</label> 
                        <input type="text"
                        defaultValue={bio.address}
                        onChange={this.handleChange('address')} /> 

                        <label>REFERRED BY</label> 
                        <input type="text" 
                        defaultValue={bio.referred_by}
                        onChange={this.handleChange('referred_by')}/>

                        <label>REFERENCE DATE</label> 
                        <input type="text"
                        defaultValue={bio.reference_date}
                        onChange={this.handleChange('reference_date')}/> 

                        <label>PASSPORT</label> 
                        <select
                        defaultValue={bio.passport}
                        onChange={this.handleChange('passport')}
                        >
                            <option>-</option>
                            <option 
                            selected="selected"
                            value={true}>True</option>
                            <option value={false}>False</option>
                        </select>

                        <label>USA I.D</label> 
                        <select 
                        defaultValue={bio.us_id}
                        onChange={this.handleChange(`us_id`)}
                        >
                            <option>-</option>
                            <option 
                            selected="selected"
                            value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <button className="formButton" onClick={this.next}>UPDATE FORM</button>
                        
                    </div>
                    )}
                </center>
            </div>
        );
    }
}


const mapStateToProps = reduxState => ({
    reduxState,
});
  
  export default withRouter(connect(mapStateToProps)(BioEdit));
