import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'
import qs from 'query-string';

class BondForm extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        // setting properties to null allow users to post null values into the database
        // which can then be edited later 
        this.setState({
            legalInfoForm:{
                ...this.state.legalInfoForm,
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
            }
        })  
    }

    state = {
        legalInfoForm: {
            case_id: this.props.reduxState.caseReducer.rows[0].id,
            ice_facility: '',
            bond_amount: '',
            bond_paid_date: '',
            bond_paid_by: '',
            foster_facility: '',
            foster_facility_address: '',
            attorney: '',
            attorney_phone: '',
            attorney_fee: '',
            legal_notes: '',
        }
    }


    next = () => {
        this.props.dispatch({ type: 'ADD_BOND', payload: this.state.legalInfoForm })
        this.props.history.push(`/legal-form?id=${this.state.legalInfoForm.case_id}`)
    }

    handleChange = propertyName => event => {
        this.setState({
            legalInfoForm: {
                ...this.state.legalInfoForm,
                [propertyName]: event.target.value,
            }
        })
    }

    render() {
        return (
            <div>
              <Nav pageName='BOND FORM' home='/home'/>
                 <center>
                    <div className="formDivs">
                        <label>ICE FACILITY</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.ice_facility || ''}
                        onChange={this.handleChange('ice_facility')}
                        /> 

                        <label>BOND AMOUNT</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.bond_amount || ''}
                        onChange={this.handleChange('bond_amount')}
                        /> 

                        <label>BOND PAID DATE</label> 
                        <input type="date" value={this.state.legalInfoForm.bond_paid_date || ''} 
                        onChange={this.handleChange('bond_paid_date')} />

                        <label>BOND PAID BY</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.bond_paid_by || ''}
                        onChange={this.handleChange('bond_paid_by')}
                        /> 

                        <label>FOSTER FACILITY</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.foster_facility || ''}
                        onChange={this.handleChange('foster_facility')}
                        /> 

                        <label>FOSTER FACILITY ADDRESS</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.foster_facility_address || ''}
                        onChange={this.handleChange('foster_facility_address')}
                        /> 

                        <label>ATTORNEY</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.attorney || ''}
                        onChange={this.handleChange('attorney')}
                        /> 

                        <label>ATTORNEY PHONE</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.attorney_phone || ''}
                        onChange={this.handleChange('attorney_phone')}
                        /> 

                        <label>ATTORNEY FEE</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.attorney_fee || ''}
                        onChange={this.handleChange('attorney_fee')}
                        /> 

                        <label>LEGAL NOTES</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.legal_notes || ''}
                        onChange={this.handleChange('legal_notes')}
                        /> 

                        <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button>
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
  export default withRouter(connect(mapStateToProps)(BondForm));