import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment'; 

class BioEdit extends Component {

    //on the load of the page check the query string in the url and pull the id
    //use the id to dispatch all the bio information for that specific file
    //set the state to put that id in as case_id
    //conditional statement to check if the reducer has any values
    //if the reducer is empty then render a blank form
    //also if empty change from the button being a POST instead of a PUT
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_BIO_INFO', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.bioReducer.length === 0) {
            this.setState({
                bioForm:{
                    ...this.state.bioForm,
                    case_id: searchObject.id,
                    first_name: this.props.reduxState.bioReducer[0].first_name, 
                    last_name: this.props.reduxState.bioReducer[0].last_name, 
                    dob: this.props.reduxState.bioReducer[0].dob, 
                    spouse_first_name: this.props.reduxState.bioReducer[0].spouse_first_name, 
                    spouse_dob: this.props.reduxState.bioReducer[0].spouse_dob, 
                    phone: this.props.reduxState.bioReducer[0].phone,
                    encrypted: this.props.reduxState.bioReducer[0].encrypted, 
                    email: this.props.reduxState.bioReducer[0].email, 
                    address: this.props.reduxState.bioReducer[0].address, 
                    referred_by: this.props.reduxState.bioReducer[0].referred_by, 
                    reference_date: this.props.reduxState.bioReducer[0].reference_date, 
                    passport: this.props.reduxState.bioReducer[0].passport,
                    us_id: this.props.reduxState.bioReducer[0].us_id,
                    data: false,
                }
            })  
        } else {
        this.setState({
            bioForm:{
                ...this.state.bioForm,
                case_id: searchObject.id,
                first_name: this.props.reduxState.bioReducer[0].first_name, 
                last_name: this.props.reduxState.bioReducer[0].last_name, 
                dob: this.props.reduxState.bioReducer[0].dob, 
                spouse_first_name: this.props.reduxState.bioReducer[0].spouse_first_name, 
                spouse_dob: this.props.reduxState.bioReducer[0].spouse_dob, 
                phone: this.props.reduxState.bioReducer[0].phone,
                encrypted: this.props.reduxState.bioReducer[0].encrypted, 
                email: this.props.reduxState.bioReducer[0].email, 
                address: this.props.reduxState.bioReducer[0].address, 
                referred_by: this.props.reduxState.bioReducer[0].referred_by, 
                reference_date: this.props.reduxState.bioReducer[0].reference_date, 
                passport: this.props.reduxState.bioReducer[0].passport,
                us_id: this.props.reduxState.bioReducer[0].us_id,
                data: true,
                }
            })  
        }
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
            data: '', 
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

     // format date from database to display correctly for inputs' defaultValues 
     formatDate = (date) => {
        let entryDate =  moment(date).format("YYYY-MM-DD"); 
        return entryDate; 
    }

    // conditional to determine a POST or a PUT 
    next = () => {
        if (this.state.bioForm.data === false) {
            this.props.dispatch({ type: 'ADD_BIO', payload: this.state.bioForm })
        } 
        else (
            this.props.dispatch({ type: 'PUT_BIO', payload: this.state.bioForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.bioForm.case_id}`)

    }

    //on the click of the back button we will be sent back to the cases landing
    backButton = () => {
    this.props.history.push(`/cases`)
  }

    render() {


        // if the reducer is empty, display input with null values to edit 
        let checkBio; 
        let state = this.state.bioForm;
        if(this.props.reduxState.bioReducer.length === 0) {
            checkBio =  <div className="formDivs">
                            <label>FIRST NAME</label> 
                            <input type="text" 
                            defaultValue={state.first_name}
                            onChange={this.handleChange('first_name')}/> 

                            <label>LAST NAME</label> 
                            <input type="text"
                            defaultValue={state.last_name}
                            onChange={this.handleChange('last_name')}/> 

                            <label>D.O.B</label> 
                            <input type="date"
                            defaultValue={this.formatDate(state.dob)}
                            onChange={this.handleChange('dob')} />

                            <label>SPOUSE NAME</label> 
                            <input type="text"
                            defaultValue={state.spouse_first_name}
                            onChange={this.handleChange('spouse_first_name')}/> 

                            <label>SPOUSE D.O.B</label> 
                            <input type="date"
                            defaultValue={this.formatDate(state.spouse_dob)}
                            onChange={this.handleChange('spouse_dob')}/> 

                            <label>PHONE</label> 
                            <input type="text"
                            defaultValue={state.phone}
                            onChange={this.handleChange('phone')} /> 

                            <label>ENCRYPTED</label> 
                            <input type="text" 
                            defaultValue={state.encrypted}
                            onChange={this.handleChange('encrypted')} />

                            <label>EMAIL</label> 
                            <input type="text" 
                            defaultValue={state.email}
                            onChange={this.handleChange('email')} />

                            <label>ADDRESS</label> 
                            <input type="text"
                            defaultValue={state.address}
                            onChange={this.handleChange('address')} /> 

                            <label>REFERRED BY</label> 
                            <input type="text" 
                            defaultValue={state.referred_by}
                            onChange={this.handleChange('referred_by')}/>

                            <label>REFERENCE DATE</label> 
                            <input type="date"
                            defaultValue={this.formatDate(state.reference_date)}
                            onChange={this.handleChange('reference_date')}/> 

                            <label>PASSPORT</label> 
                            <select
                            defaultValue={state.passport}
                            onChange={this.handleChange('passport')}
                            >
                                <option>-</option>
                                <option value={true}>True</option>
                                <option value={false}>False</option>
                            </select>

                            <label>USA I.D</label> 
                            <select 
                            defaultValue={state.us_id}
                            onChange={this.handleChange(`us_id`)}
                            >
                                <option>-</option>
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
                <Nav pageName='BIO' backArrow='/cases' home='/home'/>
                <center>
                    <div>
                        <h1>
                            BIO FORM
                        </h1>
                    </div>
                    {checkBio}
                    {/* map over the bio reducer to input all values from the reducer */}
                    {this.props.reduxState.bioReducer.map((bio, index) =>

                    <div className="formDivs" key={index}>
                        <label>FIRST NAME</label> 
                        <input type="text" 
                        defaultValue={bio.first_name}
                        onChange={this.handleChange('first_name')}/> 

                        <label>LAST NAME</label> 
                        <input type="text"
                        defaultValue={bio.last_name}
                        onChange={this.handleChange('last_name')}/> 

                        <label>D.O.B</label> 
                        <input type="date"
                        defaultValue={this.formatDate(bio.dob)}
                        onChange={this.handleChange('dob')} />

                        <label>SPOUSE NAME</label> 
                        <input type="text"
                        defaultValue={bio.spouse_first_name}
                        onChange={this.handleChange('spouse_first_name')}/> 

                        <label>SPOUSE D.O.B</label> 
                        <input type="date"
                        defaultValue={this.formatDate(bio.spouse_dob)}
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
                        <input type="date"
                        defaultValue={this.formatDate(bio.reference_date)}
                        onChange={this.handleChange('reference_date')}/> 

                        <label>PASSPORT</label> 
                        <select
                        defaultValue={bio.passport}
                        onChange={this.handleChange('passport')}
                        >
                            <option>-</option>
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>

                        <label>USA I.D</label> 
                        <select 
                        defaultValue={bio.us_id}
                        onChange={this.handleChange(`us_id`)}
                        >
                            <option>-</option>
                            <option value={true}>True</option>
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
