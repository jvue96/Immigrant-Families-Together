import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'

class BondForm extends Component {

    state = {
        legalInfoForm: {
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

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            legalInfoForm: {
                ice_facility: 'North of the Border',
                bond_amount: 50000,
                bond_paid_date: '2019-04-09',
                bond_paid_by: 'GoFundMe',
                foster_facility: 'Twin Peaks Housing',
                foster_facility_address: '666 Erie Pine Rd, Phoenix, AZ',
                attorney: 'Fabian Hoffner',
                attorney_phone: '612-555-7532',
                attorney_fee: 'Probono',
                legal_notes: 'Fabian has a distant relation with the family and offered to provide services at no charge',
            }
        })
      }

    next = () => {
        this.props.dispatch({ type: 'ADD_BOND', payload: this.state.legalInfoForm })
        this.props.history.push('/legal-form')
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
                        value={this.state.legalInfoForm.ice_facility}
                        onChange={this.handleChange('ice_facility')}
                        /> 

                        <label>BOND AMOUNT</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.bond_amount}
                        onChange={this.handleChange('bond_amount')}
                        /> 

                        <label>BOND PAID DATE</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.bond_paid_date}
                        onChange={this.handleChange('bond_paid_date')}
                        /> 

                        <label>BOND PAID BY</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.bond_paid_by}
                        onChange={this.handleChange('bond_paid_by')}
                        /> 

                        <label>FOSTER FACILITY</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.foster_facility}
                        onChange={this.handleChange('foster_facility')}
                        /> 

                        <label>FOSTER FACILITY ADDRESS</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.foster_facility_address}
                        onChange={this.handleChange('foster_facility_address')}
                        /> 

                        <label>ATTORNEY</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.attorney}
                        onChange={this.handleChange('attorney')}
                        /> 

                        <label>ATTORNEY PHONE</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.attorney_phone}
                        onChange={this.handleChange('attorney_phone')}
                        /> 

                        <label>ATTORNEY FEE</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.attorney_fee}
                        onChange={this.handleChange('attorney_fee')}
                        /> 

                        <label>LEGAL NOTES</label> 
                        <input type="text"
                        value={this.state.legalInfoForm.legal_notes}
                        onChange={this.handleChange('legal_notes')}
                        /> 

                        <button
                        className="formButton"
                        onClick={this.next}
                        >NEXT</button>

                        <button className="formButton" onClick={this.autoPopulate}>FILL INFO</button> 
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
  export default withRouter(connect(mapStateToProps)(BondForm));