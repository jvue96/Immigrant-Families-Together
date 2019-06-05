import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment';

class BondEdit extends Component {

    //on the load of the page check the query string in the url and pull the id
    //use the id to dispatch all the bond information for that specific file
    //set the state to put that id in as case_id
    //conditional statement to check if the reducer has any values
    //if the reducer is empty then render a blank form
    //also if empty change from the button being a POST instead of a PUT
    componentDidMount () {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
        // setState to null if the reducer is empty
        // enables posting null values that are left unchanged to edit later 
        if(this.props.reduxState.bondReducer.length === 0) {
            this.setState({
                bondForm: {
                    case_id: searchObject.id,
                    ice_facility: null, 
                    bond_amount: null, 
                    bond_paid_date: null, 
                    bond_paid_by: null, 
                    foster_facility: null, 
                    foster_facility_address: null, 
                    attorney: null, 
                    attorney_phone: null, 
                    attorney_fee: null, 
                    legal_notes: null, 
                    data: false, 
                        
                }
            }) 
        } else {
        this.setState({
            bondForm: {
                case_id: searchObject.id,
                ice_facility: this.props.reduxState.bondReducer[0].ice_facility,
                bond_amount: this.props.reduxState.bondReducer[0].bond_amount,
                bond_paid_date: this.props.reduxState.bondReducer[0].bond_paid_date,
                bond_paid_by: this.props.reduxState.bondReducer[0].bond_paid_by,
                foster_facility: this.props.reduxState.bondReducer[0].foster_facility,
                foster_facility_address: this.props.reduxState.bondReducer[0].foster_facility_address,
                attorney: this.props.reduxState.bondReducer[0].attorney,
                attorney_phone: this.props.reduxState.bondReducer[0].attorney_phone,
                attorney_fee: this.props.reduxState.bondReducer[0].attorney_fee,
                legal_notes: this.props.reduxState.bondReducer[0].legal_notes,
                data: true, 
                    
                }
            }) 
        }
    }

    state = {
        bondForm: {
            case_id: '',
            ice_facility: '',
            bond_amount: '',
            bond_paid_date: '',
            foster_facility: '',
            foster_facility_address: '', 
            attorney: '', 
            attorney_phone: '', 
            legal_notes: '', 
            data: '', 
        }
    }

     // dispatch PUT and go back to previous page 
     next = () => {
        if (this.state.bondForm.data === false) {
            this.props.dispatch({ type: 'ADD_BOND', payload: this.state.bondForm })
        } else (
            this.props.dispatch({ type: 'PUT_BOND', payload: this.state.bondForm })
        )
        this.props.history.push(`/edit-case?id=${this.state.bondForm.case_id}`) 
    }

    // format date from database to display correctly for inputs' defaultValues 
    formatDate = (date) => {
        let entryDate =  moment(date).format("YYYY-MM-DD"); 
        return entryDate; 
    }

    // set state properties to become input field/selectors values 
    handleChange = (propertyName) => {  
    return(event) =>{
    this.setState({
        bondForm: {
            ...this.state.bondForm, 
            [propertyName]: event.target.value,
                }
            });
        }    
    }

    render() {

        // if the reducer is empty, display input with null values to edit 
        let checkBond; 
        let state = this.state.bondForm; 
        if(this.props.reduxState.bondReducer.length === 0) {
            checkBond =   <div className="formDivs">
                            <label>ICE FACILITY</label> 
                            <input type="text"
                            defaultValue={state.ice_facility}
                            onChange={this.handleChange('ice_facility')}
                            /> 

                            <label>BOND AMOUNT</label> 
                            <input type="text"
                            defaultValue={state.bond_amount}
                            onChange={this.handleChange('bond_amount')}
                            /> 

                            <label>BOND PAID DATE</label> 
                            <input type="date" 
                            defaultValue={this.formatDate(state.bond_paid_date)} 
                            onChange={this.handleChange('bond_paid_date')} />

                            <label>BOND PAID BY</label> 
                            <input type="text"
                            defaultValue={state.bond_paid_by}
                            onChange={this.handleChange('bond_paid_by')}
                            /> 

                            <label>FOSTER FACILITY</label> 
                            <input type="text"
                            defaultValue={state.foster_facility}
                            onChange={this.handleChange('foster_facility')}
                            /> 

                            <label>FOSTER FACILITY ADDRESS</label> 
                            <input type="text"
                            defaultValue={state.foster_facility_address}
                            onChange={this.handleChange('foster_facility_address')}
                            /> 

                            <label>ATTORNEY</label> 
                            <input type="text"
                            defaultValue={state.attorney}
                            onChange={this.handleChange('attorney')}
                            /> 

                            <label>ATTORNEY PHONE</label> 
                            <input type="text"
                            defaultValue={state.attorney_phone}
                            onChange={this.handleChange('attorney_phone')}
                            /> 

                            <label>ATTORNEY FEE</label> 
                            <input type="text"
                            defaultValue={state.attorney_fee}
                            onChange={this.handleChange('attorney_fee')}
                            /> 

                            <label>LEGAL NOTES</label> 
                            <input type="text"
                            defaultValue={state.legal_notes}
                            onChange={this.handleChange('legal_notes')}
                            /> 

                            <button
                            className="formButton"
                            onClick={this.next}
                            >NEXT</button>
                        </div>
                        }

        return (
            <div>
                <Nav pageName='BOND FORM' home='/home'/>
                    <center>
                    {checkBond}
                    {this.props.reduxState.bondReducer.map((bond, index) =>
                        <div className="formDivs" key={index}>
                            <label>ICE FACILITY</label> 
                            <input type="text"
                            defaultValue={bond.ice_facility}
                            onChange={this.handleChange('ice_facility')}
                            /> 

                            <label>BOND AMOUNT</label> 
                            <input type="text"
                            defaultValue={bond.bond_amount}
                            onChange={this.handleChange('bond_amount')}
                            /> 

                            <label>BOND PAID DATE</label> 
                            <input type="date" 
                            defaultValue={this.formatDate(bond.bond_paid_date)} 
                            onChange={this.handleChange('bond_paid_date')} />

                            <label>BOND PAID BY</label> 
                            <input type="text"
                            defaultValue={bond.bond_paid_by}
                            onChange={this.handleChange('bond_paid_by')}
                            /> 

                            <label>FOSTER FACILITY</label> 
                            <input type="text"
                            defaultValue={bond.foster_facility}
                            onChange={this.handleChange('foster_facility')}
                            /> 

                            <label>FOSTER FACILITY ADDRESS</label> 
                            <input type="text"
                            defaultValue={bond.foster_facility_address}
                            onChange={this.handleChange('foster_facility_address')}
                            /> 

                            <label>ATTORNEY</label> 
                            <input type="text"
                            defaultValue={bond.attorney}
                            onChange={this.handleChange('attorney')}
                            /> 

                            <label>ATTORNEY PHONE</label> 
                            <input type="text"
                            defaultValue={bond.attorney_phone}
                            onChange={this.handleChange('attorney_phone')}
                            /> 

                            <label>ATTORNEY FEE</label> 
                            <input type="text"
                            defaultValue={bond.attorney_fee}
                            onChange={this.handleChange('attorney_fee')}
                            /> 

                            <label>LEGAL NOTES</label> 
                            <input type="text"
                            defaultValue={bond.legal_notes}
                            onChange={this.handleChange('legal_notes')}
                            /> 

                            <button
                            className="formButton"
                            onClick={this.next}
                            >NEXT</button>
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
export default withRouter(connect(mapStateToProps)(BondEdit));