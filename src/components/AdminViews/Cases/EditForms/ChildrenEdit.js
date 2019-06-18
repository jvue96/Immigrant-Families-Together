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
        this.props.dispatch({ type: 'GET_CHILDREN', payload: searchObject.id });
         // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.childrenReducer.length === 0) {
            this.setState({
                ...this.state.childForm,
                case_id: searchObject.id,
                // id: this.props.reduxState.childrenReducer[0].id,
                child_name: null,
                child_dob: null,
                child_info: null, 
                data: false,
            })
        } else {
        this.setState({
            childForm:{
                ...this.state.childForm,
                case_id: searchObject.id,
                id: this.props.reduxState.childrenReducer[0].id,
                child_name: this.props.reduxState.childrenReducer[0].child_name,
                child_dob: this.props.reduxState.childrenReducer[0].child_dob,
                child_info: this.props.reduxState.childrenReducer[0].child_info,
                data: true,
            }
        })
        } 
    }

    state = {
        childForm: {
            id: '',
            case_id: '',
            child_name: '',
            child_dob: '',
            child_info: '',
            data: '',
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
    
     // conditional to determine a POST or a PUT 
    next = () => {
        if (this.state.childForm.data === false) {
            this.props.dispatch({ type: 'ADD_CHILDREN', payload: this.state.childForm })
        } else (
            this.props.dispatch({ type: 'PUT_CHILDREN', payload: this.state.childForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.childForm.case_id}`)
    }

    // pushes new state to children array to create multiple children
    save = () => {
        this.state.addChild.push(this.state.childForm)
    }

      render() {

         // if the reducer is empty, display input with null values to edit 
         let checkChildren; 
         let state = this.state.childForm;
         if(this.props.reduxState.childrenReducer.length === 0) {
             checkChildren = <div className="formDivs">
             
                             <label>NAME</label> 
                            <input type="text"
                            defaultValue={state.child_name}
                            onChange={this.handleChange('child_name')}/> 
    
                            <label>DOB</label> 
                            <input type="date"
                            defaultValue={state.child_dob}
                            onChange={this.handleChange('child_dob')} /> 
                        
                            <label>INFO</label> 
                            <input type="text"
                            defaultValue={state.child_info }
                            onChange={this.handleChange('child_info')}/> 
 
                             <button
                             className="formButton"
                             onClick={this.next}>
                             UPDATE FORM
                             </button>
                             </div> 
         }

        return (
          <div>

              <Nav pageName='CHILDREN FORM' home='/home'/>

              {/* {JSON.stringify(this.state)} */}

              <center>
              
                  {checkChildren}
                  {this.props.reduxState.childrenReducer.map((children,index) =>
                    <div className="formDivs">

                    <label>NAME</label> 
                    <input type="text"
                    defaultValue={children.child_name}
                    onChange={this.handleChange('child_name')}/> 
    
                    <label>DOB</label> 
                    <input type="date"
                    defaultValue={children.child_dob} onChange={this.handleChange('child_dob')} /> 
                
                    <label>INFO</label> 
                    <input type="text"
                    defaultValue={children.child_info }
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

                        <input type="text"
                        className="hiddenButton"
                        defaultValue={children.id}
                        onChange={this.handleChange('id')}/>


            
                <button 
                className="formButton"
                onClick={this.next}> UPDATE FORM
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
  
  export default withRouter(connect(mapStateToProps)(ChildForm));