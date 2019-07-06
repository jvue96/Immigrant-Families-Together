import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class SchoolEdit extends Component {

    //on the load of the page check the query string in the url and pull the id
    //use the id to dispatch all the school information for that specific file
    //set the state to put that id in as case_id
    //conditional statement to check if the reducer has any values
    //if the reducer is empty then render a blank form
    //also if empty change from the button being a POST instead of a PUT
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_SCHOOL', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if (this.props.reduxState.schoolReducer.length === 0) {
            this.setState({
                schoolForm: {
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
                schoolForm: {
                    ...this.state.schoolForm,
                    case_id: searchObject.id,
                    data: true,
                }
            })
        }
    }

    state = {
        schoolForm: {
            id: '',
            case_id: '',
            name: '',
            phone: '',
            email: '',
            data: '',
        },
        // create an array to push all schools into 
        // posting an array of school 
        addSchool: [],
        newSchool: false,
    }

    handleChange = propertyName => event => {
        this.setState({
            schoolForm: {
                ...this.state.schoolForm,
                [propertyName]: event.target.value,
            }
        })
    }

    // conditional to determine a POST or a PUT 
    updateForm = () => {
        if (this.state.schoolForm.data === false) {
            this.props.dispatch({ type: 'ADD_SCHOOL', payload: this.state.addSchool })
        } else (
            this.props.dispatch({ type: 'PUT_SCHOOL', payload: this.state.schoolForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.schoolForm.case_id}`)
    }

     // pushes new state to children array to create multiple children
     save = () => {
        this.state.addSchool.push(this.state.schoolForm)
        this.setState({
            schoolForm: {
                ...this.state.schoolForm,
                data: false, 
            }
        })
    }

     // clears input fields to enable adding another child 
     addInput = () => {
        this.setState({
            schoolForm: {
                ...this.state.schoolForm,
                name: '',
                phone: '',
                email: '',
                }
            });
        };

        selectedEdit = (schoolName, phoneNumber, email, id) => {
            this.setState({
                schoolForm: {
                    ...this.state.schoolForm,
                    name: schoolName,
                    phone: phoneNumber,
                    email: email,
                    id: id,
                    data: true, 
                },
            })
        }

        addNewSchool = () => {
            this.setState({
                newSchool: !this.state.newSchool,
            })
        }


    render() {

        // if the reducer is empty, display input with null values to edit 
        let checkSchool;
        let state = this.state.schoolForm;
        if (this.props.reduxState.schoolReducer.length === 0) {
            checkSchool = <div className="formDivs">
                <label>SCHOOL NAME</label>
                <input type="text"
                    defaultValue={state.name}
                    onChange={this.handleChange('name')} />

                <label>PHONE NUMBER</label>
                <input type="text"
                    defaultValue={state.phone}
                    onChange={this.handleChange('phone')} />

                <label>EMAIL</label>
                <input type="text"
                    defaultValue={state.email}
                    onChange={this.handleChange('email')} />

                <button
                    className="formButton"
                    onClick={this.updateForm}>
                    UPDATE FORM
                </button>
            </div>
        } 
        else {
            checkSchool = 
            this.props.reduxState.schoolReducer.map((school, index) =>

                <div className="formDivs" key={index}>

                <label>SCHOOL NAME</label>
                <button
                className="editButton"
                onClick={(name, dob, info, id) => this.selectedEdit(school.name, school.phone, 
                                                    school.email, school.id)}
                > Click to edit me </button>
                    <input type="text"
                        defaultValue={school.name}
                        onChange={this.handleChange('name')} />

                    <label>PHONE NUMBER</label>
                    <input type="text"
                        defaultValue={school.phone}
                        onChange={this.handleChange('phone')} />

                    <label>EMAIL</label>
                    <input type="text"
                        defaultValue={school.email}
                        onChange={this.handleChange('email')} />

                    <input type="text"
                        className="hiddenButton"
                        defaultValue={school.id}
                        onChange={this.handleChange('id')} />

                    <button
                        className="formButton"
                        onClick={this.updateForm}>
                        UPDATE FORM
                    </button>

                </div>
            )

        }
        return (
            <div>
                <Nav pageName='SCHOOL' home='/home' />
                <center>
                    {checkSchool}

                    <button
                    className="editButton"
                    onClick={this.addNewSchool}
                    >
                        Add a new school
                    </button>
                    {this.state.newSchool ? 
                    <center>
                    <div className="formDivs">

                        <label>SCHOOL NAME</label> 
                        <input type="text" 
                        value={this.state.schoolForm.name || ''} 
                        onChange={this.handleChange('name')}/>

                        <label>PHONE NUMBER</label> 
                        <input type="text" 
                        value={this.state.schoolForm.phone || ''} 
                        onChange={this.handleChange('phone')}/>

                        <label>EMAIL</label> 
                        <input type="text" 
                        value={this.state.schoolForm.email || ''} 
                        onChange={this.handleChange('email')}/> 
                       
                        <button 
                        className="formButton"
                        onClick={this.save}> SUBMIT SCHOOL
                        </button> 

                        <button 
                        className="formButton"
                        onClick={this.addInput}> ADD ANOTHER SCHOOL
                        </button>
                        
                        <br/>

                        <button
                            className="formButton"
                            onClick={this.updateForm}>
                            NEXT
                        </button>
                    </div>
                </center>
                :
                ""}
                </center>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});

export default withRouter(connect(mapStateToProps)(SchoolEdit));