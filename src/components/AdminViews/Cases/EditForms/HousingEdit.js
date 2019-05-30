import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class HousingEdit extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_HOUSING', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.housingReducer.length === 0) {
            this.setState({
                housingForm:{
                    ...this.state.housingForm,
                    case_id: searchObject.id,
                    address: null, 
                    rent: null, 
                    paid_by: null, 
                    utilities: null, 
                    living_with_fam: null, 
                    data: false, 
                }
            })  
        } else {
        this.setState({
            housingForm:{
                ...this.state.housingForm,
                case_id: searchObject.id,
                address: this.props.reduxState.housingReducer[0].address, 
                rent: this.props.reduxState.housingReducer[0].rent, 
                paid_by: this.props.reduxState.housingReducer[0].paid_by, 
                utilities: this.props.reduxState.housingReducer[0].utilities, 
                living_with_fam: this.props.reduxState.housingReducer[0].living_with_fam,
                data: true, 
                }
            })
        }  
    }

    state= {
        housingForm: {
            case_id: '',
            address:'',
            rent:'',
            paid_by:'',
            utilities:'',
            living_with_fam:'',
            data: '', 
        }
    }


    handleChange = propertyName => event => {
        // console.log(`this is the propertyName:`, propertyName);
        // console.log(`this is target value:`, event.target.value)
        this.setState({
            housingForm: {
                ...this.state.housingForm,
                [propertyName]: event.target.value,
            }
        })
    }

    // conditional to determine a POST or a PUT 
    next = () => {
        if (this.state.housingForm.data === false) {
            this.props.dispatch({ type: 'ADD_HOUSING', payload: this.state.housingForm })
        } else (
            this.props.dispatch({ type: 'PUT_HOUSING', payload: this.state.housingForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.housingForm.case_id}`)
    }

    render() {

        // if the reducer is empty, display input with null values to edit 
        let checkHousing; 
        let state = this.state.housingForm; 
        if(this.props.reduxState.housingReducer.length === 0) {
            checkHousing =  <div className="formDivs">
                                <label>ADDRESS</label> 
                                <input type="text"
                                defaultValue={state.address}
                                onChange={this.handleChange('address')}/> 

                                <label>MONTHLY RENT</label> 
                                <input type="text"
                                defaultValue={state.rent}
                                onChange={this.handleChange('rent')}/> 

                                <label>RENT PAID BY</label> 
                                <input type="text"
                                defaultValue={state.paid_by}
                                onChange={this.handleChange('paid_by')}/> 

                                <label>UTILITIES</label> 
                                <input type="text"
                                defaultValue={state.utilities}
                                onChange={this.handleChange('utilities')}/> 

                                <label>LIVING WITH FAMILY</label> 
                                <select 
                                defaultValue={state.living_with_fam}
                                onChange={this.handleChange(`living_with_fam`)}
                                >
                                    <option>Yes or No </option>
                                    <option value="yes">Yes</option>
                                    <option value="no">No</option>
                                </select>

                                <button
                                    className="formButton"
                                    onClick={this.next}>
                                    UPDATE FORM
                                </button>
                        
                            </div>
        }

        return (
            <div>
                <Nav pageName='HOUSING' home='/home'/>
                <center>
                {checkHousing}
                {this.props.reduxState.housingReducer.map((housing,index) =>

                    <div className="formDivs" key={index}>
                        <label>ADDRESS</label> 
                        <input type="text"
                        defaultValue={housing.address}
                        onChange={this.handleChange('address')}/> 

                        <label>MONTHLY RENT</label> 
                        <input type="text"
                        defaultValue={housing.rent}
                        onChange={this.handleChange('rent')}/> 

                        <label>RENT PAID BY</label> 
                        <input type="text"
                        defaultValue={housing.paid_by}
                        onChange={this.handleChange('paid_by')}/> 

                        <label>UTILITIES</label> 
                        <input type="text"
                        defaultValue={housing.utilities}
                        onChange={this.handleChange('utilities')}/> 

                        <label>LIVING WITH FAMILY</label> 
                        <select 
                        defaultValue={housing.living_with_fam}
                        onChange={this.handleChange(`living_with_fam`)}
                        >
                            <option>Yes or No </option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>

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
export default withRouter(connect(mapStateToProps)(HousingEdit));