import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class SchoolForm extends Component {

componentDidMount = () => {
    this.setState({
        schoolForm:{
            ...this.state.schoolForm,
                case_id: this.props.reduxState.caseReducer.rows[0].id,
                name: null, 
                phone: null, 
                email: null, 
            }
    })  
}

state= {
    addSchool: [],
    schoolForm: {
        case_id: this.props.reduxState.caseReducer.rows[0].id,
        name:'',
        phone:'',
        email:'',
    }
}

save = () => {
    this.state.addSchool.push(this.state.schoolForm)
}

addInput = event => {
    this.setState({
        schoolForm: {
            case_id: this.props.reduxState.caseReducer.rows[0].id,
            name:'',
            phone:'',
            email:'',
            }
        });
    };

handleChange = propertyName => event => {
    this.setState({
        schoolForm: {
            ...this.state.schoolForm,
            [propertyName]: event.target.value,
        }
    })
}

next = () => {
    this.props.dispatch({ type: 'ADD_SCHOOL', payload: this.state.addSchool })
    this.props.history.push(`/housing-form?id=${this.state.schoolForm.case_id}`)
}



    render() {
        return (
            <div>
             <Nav pageName='SCHOOL' home='/home'/>
                <center>
                    <div className="formDivs">
                        <label>SCHOOL NAME</label> 
                        <input type="text" value={this.state.schoolForm.name || ''} onChange={this.handleChange('name')}/>
                        <label>PHONE NUMBER</label> 
                        <input type="text" value={this.state.schoolForm.phone || ''} onChange={this.handleChange('phone')}/>
                        <label>EMAIL</label> 
                        <input type="text" value={this.state.schoolForm.email || ''} onChange={this.handleChange('email')}/> 
                       
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
                            onClick={this.next}>
                            NEXT
                        </button>
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
  export default withRouter(connect(mapStateToProps)(SchoolForm));