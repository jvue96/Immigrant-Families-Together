import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav';
import qs from 'query-string';

class ChildForm extends Component {

    //on the load of the page check the query string in the url and pull the id
    //use the id to dispatch all the children information for that specific file
    //set the state to put that id in as case_id
    //conditional statement to check if the reducer has any values
    //if the reducer is empty then render a blank form
    //also if empty change from the button being a POST instead of a PUT
    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('ChildrenForm searchObject', searchObject);
        this.props.dispatch({ type: 'GET_CHILDREN', payload: searchObject.id });
        this.setState({
            childForm:{
                ...this.state.childForm,
                case_id: searchObject.id,
                child_name: this.props.reduxState.childrenReducer[0].child_name,
                child_dob: this.props.reduxState.childrenReducer[0].child_dob,
                child_info: this.props.reduxState.childrenReducer[0].child_info,
            }
        })  
    }

    state = {
        addChild: [],

        childForm: {
            case_id: '',
            child_name: '',
            child_dob: '',
            child_info: '',
        }
    };

    // clears input fields to enable adding another child 
    addInput = event => {
    this.setState({
        childForm: {
            child_name: '',
            child_dob: '',
            child_info: '',
            }
        });
    };

    // change state to become input field values 
      handleChange = propertyName => event => {
        this.setState({
            childForm: {
                ...this.state.childForm,
                [propertyName]: event.target.value,
            }
        })
    }
    
    // dispatch to childrenSaga to post data
    next = () => {
        this.props.dispatch({ type: 'PUT_CHILDREN', payload: this.state.addChild })
        // this.props.history.push(`/edit-case?id=${this.state.childForm.case_id}`);

    }

    // pushes new state to children array to create multiple children
    save = () => {
        this.state.addChild.push(this.state.childForm)
        // un comment if you want to test state after filling in input fields 
        console.log(this.state);
    }

      render() {

        return (
          <div>

              <Nav pageName='CHILDREN FORM' home='/home'/>

              {/* {JSON.stringify(this.state)} */}

              <center>
                        {/* UN COMMENT TO TEST IF DATA IS IN childrenReducer */}
                        {/* {JSON.stringify(this.props.reduxState.childrenReducer)} */}
                    <div className="formDivs">

                    <label>NAME</label> 
                    <input type="text"
                    value={this.state.childForm.child_name}
                    onChange={this.handleChange('child_name')}/> 
    
                    <label>DOB</label> 
                    <input type="date" value={this.state.childForm.child_dob} onChange={this.handleChange('child_dob')} /> 
                
                    <label>INFO</label> 
                    <input type="text"
                    value={this.state.childForm.child_info }
                    onChange={this.handleChange('child_info')}/> 
                
                {/* pushes new state to children array to create multiple children */}
                {/* <button 
                className="formButton"
                onClick={this.save}> Save
                </button>  */}

                {/* clears input fields to enable adding another child  */}
                {/* <button 
                className="formButton"
                style={{width: 200}}
                onClick={this.addInput}> Add Another Child
                </button> */}

                 


                {/* dispatch to childrenSaga to post data  */}
                <button 
                className="formButton"
                onClick={this.next}> UPDATE FORM
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
  
  export default withRouter(connect(mapStateToProps)(ChildForm));