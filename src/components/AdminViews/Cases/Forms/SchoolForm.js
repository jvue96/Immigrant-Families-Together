import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

class SchoolForm extends Component {

state= {
    schoolForm: {
        name:'',
        phone:'',
        email:'',
    }
}

fillstate = (event) => {
    event.preventDefault();
    this.setState({
        schoolForm:{
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

    this.props.history.push('/housing-form')
}



    render() {
        return (
            <div>
    <button className="hiddenButton" onClick={this.fillstate}></button>
                <center>
                    {/* <pre>{JSON.stringify(this.state)}</pre> */}
                    <div>
                        <h1>
                            SCHOOL
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>SCHOOL NAME</label> <br/>
                        <input type="text" value={this.state.schoolForm.name} onChange={this.handleChange('name')}/><br/>
                        <label>PHONE NUMBER</label> <br/>
                        <input type="text" value={this.state.schoolForm.phone} onChange={this.handleChange('phone')}/><br/>
                        <label>EMAIL</label> <br/>
                        <input type="text" value={this.state.schoolForm.email} onChange={this.handleChange('email')}/> <br/>
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

const mapStateToProps = state => ({
    user: state.user,
  });
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(SchoolForm));