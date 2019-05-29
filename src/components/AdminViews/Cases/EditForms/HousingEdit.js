import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class HousingEdit extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('housingForm searchObject', searchObject);
        this.props.dispatch({ type: 'GET_HOUSING', payload: searchObject.id });
        this.setState({
            housingForm:{
                ...this.state.housingForm,
                case_id: searchObject.id,
                address: this.props.reduxState.housingReducer[0].address, 
                rent: this.props.reduxState.housingReducer[0].rent, 
                paid_by: this.props.reduxState.housingReducer[0].paid_by, 
                utilities: this.props.reduxState.housingReducer[0].utilities, 
                living_with_fam: this.props.reduxState.housingReducer[0].living_with_fam,
            }
        })  
    }

state= {
    housingForm: {
        case_id: '',
        address:'',
        rent:'',
        paid_by:'',
        utilities:'',
        living_with_fam:'',
    }
}


handleChange = propertyName => event => {
    console.log(`this is the propertyName:`, propertyName);
    console.log(`this is target value:`, event.target.value)
    this.setState({
        housingForm: {
            ...this.state.housingForm,
            [propertyName]: event.target.value,
        }
    })
    console.log(`this is state after handleChange:`, this.state)
}

next = () => {
    this.props.dispatch({ type: 'PUT_HOUSING', payload: this.state.housingForm })
    this.props.history.push(`/edit-case?id=${this.state.housingForm.case_id}`)
}

    render() {
        return (
            <div>
                <Nav pageName='HOUSING' home='/home'/>
                <center>
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