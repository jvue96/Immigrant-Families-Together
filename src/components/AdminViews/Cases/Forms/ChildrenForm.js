import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav';

class ChildForm extends Component {

    state = {
        addChild: [],

        childForm: {
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

      // autofill test data 
      test = () => {
        this.setState({
            childForm: {
                child_name: 'juno',
                /* check if group has decided if database table dob is varchar or date, delete this line when done */
                child_dob: '2019-12-12',
                child_info: 'rock star',
            }
        });
      }

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
        this.props.dispatch({ type: 'ADD_CHILDREN', payload: this.state.addChild })
        this.props.history.push('/medical-form');
    }

    // pushes new state to children array to create multiple children
    save = () => {
        this.state.addChild.push(this.state.childForm)
        // un comment if you want to test state after filling in input fields 
        // console.log(this.state);
    }

    componentDidMount = () => {
        // uncomment to test if reducer holds GET request data  
        // this.props.dispatch({type: 'GET_CHILDREN'})
    }

      render() {

        return (
          <div>
              <Nav pageName='CHILDREN FORM' home='/home'/>
              <center>
                        {/* UN COMMENT TO TEST IF DATA IS IN childrenReducer */}
                        {/* {JSON.stringify(this.props.reduxState.childrenReducer)} */}
                    <div className="formDivs">

                    <label>NAME</label> 
                    <input type="text"
                    value={this.state.childForm.child_name}
                    onChange={this.handleChange('child_name')}/> 
    
                    <label>DOB</label> 
                    <input type="text"
                    value={this.state.childForm.child_dob}
                    onChange={this.handleChange('child_dob')}/> 
                
                    <label>INFO</label> 
                    <input type="text"
                    value={this.state.childForm.child_info }
                    onChange={this.handleChange('child_info')}/> 
                
                {/* pushes new state to children array to create multiple children */}
                <button 
                className="formButton"
                onClick={this.save}> Save
                </button> 

                {/* clears input fields to enable adding another child  */}
                <button 
                className="formButton"
                style={{width: 200}}
                onClick={this.addInput}> Add Another Child
                </button>

                 


                {/* dispatch to childrenSaga to post data  */}
                <button 
                className="formButton"
                onClick={this.next}> Next
                </button>

                 <button onClick={this.test}> TEST DATA </button>
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