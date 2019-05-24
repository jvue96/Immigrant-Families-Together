import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class SchoolForm extends Component {

componentDidMount = () => {
    const searchObject = qs.parse(this.props.location.search)
    console.log('schoolForm searchObject', searchObject);
    this.setState({
        schoolForm:{
            ...this.state.schoolForm,
            case_id: searchObject.id,
        }
    })  
}

state= {
    schoolForm: {
        case_id: this.props.reduxState.caseReducer.rows[0].id,
        name:'',
        phone:'',
        email:'',
    }
}

fillstate = (event) => {
    event.preventDefault();
    this.setState({
        schoolForm:{
        case_id: this.props.reduxState.caseReducer.rows[0].id,
        name:'Dale`s Elementary',
        phone:'222-222-2222',
        email:'DaleSchool@dale.edu',
    },
  })
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
    this.props.dispatch({ type: 'ADD_SCHOOL', payload: this.state.schoolForm })

    this.props.history.push(`/housing-form?id=${this.state.schoolForm.case_id}`)
}



    render() {
        return (
            <div>
                <Nav pageName='SCHOOL' home='/home'/>
                <center>
                    {/* <pre>{JSON.stringify(this.state)}</pre> */}
                  
                    <div className="formDivs">
                        <label>SCHOOL NAME</label> 
                        <input type="text" value={this.state.schoolForm.name} onChange={this.handleChange('name')}/>
                        <label>PHONE NUMBER</label> 
                        <input type="text" value={this.state.schoolForm.phone} onChange={this.handleChange('phone')}/>
                        <label>EMAIL</label> 
                        <input type="text" value={this.state.schoolForm.email} onChange={this.handleChange('email')}/> 
                        <button
                            className="formButton"
                            onClick={this.next}>
                            NEXT
                        </button>

                        <button className="formButton"
                        onClick={this.fillstate}>
                            Fill Info
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