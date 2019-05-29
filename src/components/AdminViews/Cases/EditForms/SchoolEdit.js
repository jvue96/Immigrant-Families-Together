import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class SchoolEdit extends Component {
    
componentDidMount = () => {
    const searchObject = qs.parse(this.props.location.search)
    console.log('schoolForm searchObject', searchObject);
    this.props.dispatch({ type: 'GET_SCHOOL', payload: searchObject.id });
    this.setState({
        schoolForm:{
            ...this.state.schoolForm,
            case_id: searchObject.id,
            name: this.props.reduxState.schoolReducer[0].name, 
            phone: this.props.reduxState.schoolReducer[0].phone, 
            email: this.props.reduxState.schoolReducer[0].email, 
        }
    })  
}

state= {
    schoolForm: {
        case_id: '',
        name:'',
        phone:'',
        email:'',
    }
}

handleChange = propertyName => event => {
    console.log(`this is the propertyName:`, propertyName);
    console.log(`this is target value:`, event.target.value)
    this.setState({
        schoolForm: {
            ...this.state.schoolForm,
            [propertyName]: event.target.value,
        }
    })
    console.log(`this is state after handleChange:`, this.state)
}

next = () => {
    this.props.dispatch({ type: 'PUT_SCHOOL', payload: this.state.schoolForm })
    this.props.history.push(`/edit-case?id=${this.state.schoolForm.case_id}`)
}



    render() {
        return (
            <div>
                <Nav pageName='SCHOOL' home='/home'/>
                <center>
                    {/* <pre>{JSON.stringify(this.state)}</pre> */}
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