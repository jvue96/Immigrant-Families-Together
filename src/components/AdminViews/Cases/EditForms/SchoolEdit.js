import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class SchoolEdit extends Component {
    
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_SCHOOL', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.schoolReducer.length === 0) {
            this.setState({
                schoolForm:{
                    ...this.state.schoolForm,
                    case_id: searchObject.id,
                    name: null, 
                    phone: null, 
                    email: null, 
                    data: false, 
                }
            })  
        } else {
        this.setState({
            schoolForm:{
                ...this.state.schoolForm,
                case_id: searchObject.id,
                name: this.props.reduxState.schoolReducer[0].name, 
                phone: this.props.reduxState.schoolReducer[0].phone, 
                email: this.props.reduxState.schoolReducer[0].email, 
                data: true, 
                }
            })
        }
    }

    state= {
        schoolForm: {
            case_id: '',
            name:'',
            phone:'',
            email:'',
            data: '', 
        }
    }

    handleChange = propertyName => event => {
        // console.log(`this is the propertyName:`, propertyName);
        // console.log(`this is target value:`, event.target.value)
        this.setState({
            schoolForm: {
                ...this.state.schoolForm,
                [propertyName]: event.target.value,
            }
        })
    }
    // conditional to determine a POST or a PUT 
    next = () => {
        if (this.state.schoolForm.data === false) {
            this.props.dispatch({ type: 'ADD_SCHOOL', payload: this.state.schoolForm })
        } else (
            this.props.dispatch({ type: 'PUT_SCHOOL', payload: this.state.schoolForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.schoolForm.case_id}`)
    }



    render() {

        // if the reducer is empty, display input with null values to edit 
        let checkSchool; 
        let state = this.state.schoolForm;
        if(this.props.reduxState.schoolReducer.length === 0) {
            checkSchool = <div className="formDivs">
                            <label>SCHOOL NAME</label> 
                            <input type="text"
                            defaultValue={state.name}
                            onChange={this.handleChange('name')}/>

                            <label>PHONE NUMBER</label> 
                            <input type="text"
                            defaultValue={state.phone}
                            onChange={this.handleChange('phone')}/>

                            <label>EMAIL</label> 
                            <input type="text"
                            defaultValue={state.email}
                            onChange={this.handleChange('email')}/>

                            <button
                            className="formButton"
                            onClick={this.next}>
                            UPDATE FORM
                            </button>
                            </div> 
        }

        return (
            <div>
                <Nav pageName='SCHOOL' home='/home'/>
                <center>
                    {checkSchool}
                    {this.props.reduxState.schoolReducer.map((school,index) =>

                    <div className="formDivs" key={index}>
                        <label>SCHOOL NAME</label> 
                        <input type="text"
                        defaultValue={school.name}
                        onChange={this.handleChange('name')}/>

                        <label>PHONE NUMBER</label> 
                        <input type="text"
                        defaultValue={school.phone}
                        onChange={this.handleChange('phone')}/>

                        <label>EMAIL</label> 
                        <input type="text"
                        defaultValue={school.email}
                        onChange={this.handleChange('email')}/>

                        <button
                            className="formButton"
                            onClick={this.next}>
                            UPDATE FORM
                        </button>

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
  
// this allows us to use <App /> in index.js
export default withRouter(connect(mapStateToProps)(SchoolEdit));