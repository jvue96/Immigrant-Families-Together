import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Nav from '../../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment';

class BondEdit extends Component {

    componentDidMount () {
        const searchObject = qs.parse(this.props.location.search)
        // dispatch to get the case_id and parse into url for acccess 
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
        this.setState({
            bondForm: {
                case_id: searchObject.id,
                ice_facility: this.props.reduxState.bondReducer[0].ice_facility,
                bond_amount: this.props.reduxState.bondReducer[0].bond_amount,
                bond_paid_date: this.formatDate(this.props.reduxState.bondReducer[0].bond_paid_date),
                bond_paid_by: this.formatDate(this.props.reduxState.bondReducer[0].bond_paid_by),
                foster_facility: this.props.reduxState.bondReducer[0].foster_facility,
                foster_facility_address: this.props.reduxState.bondReducer[0].foster_facility_address,
                attorney: this.props.reduxState.bondReducer[0].attorney,
                attorney_phone: this.props.reduxState.bondReducer[0].attorney_phone,
                attorney_fee: this.props.reduxState.bondReducer[0].attorney_fee,
                legal_notes: this.props.reduxState.bondReducer[0].legal_notes,
                    
            }
        }) 
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
        }
    }

     // dispatch PUT and go back to previous page 
     next = () => {
        this.props.dispatch({type:'PUT_BOND', payload: this.state.bondForm});
        this.props.history.push(`/edit-case?id=${this.state.bondForm.case_id}`) 
        console.log(this.state.bondForm);
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
        return (
            <div>
                <Nav pageName='BOND FORM' home='/home'/>
                    <center>
                        {/* {JSON.stringify(this.props.reduxState.bondReducer)} */}
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