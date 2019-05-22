import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

class HousingForm extends Component {


state= {
    housingForm: {
        address:'',
        rent:'',
        paid_by:'',
        utilities:'',
        living_with_fam:'',
    }
}

fillstate = (event) => {
    event.preventDefault();
    this.setState({
        housingForm:{
            address:'1234 Fake St Minneapolis, MN',
            rent:'$1100',
            paid_by:'Client',
            utilities:'$150',
            living_with_fam:'yes',
    },
    })
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
    this.props.dispatch({ type: 'ADD_HOUSING', payload: this.state.housingForm })

        this.props.history.push('/bond-form')
}

    render() {
        return (
            <div>
    <button className="hiddenButton" onClick={this.fillstate}></button>
                <center>
                    <div>
                        <h1>
                            HOUSING
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>ADDRESS</label> 
                        <input type="text" value={this.state.housingForm.address} onChange={this.handleChange('address')}/> 
                        <label>MONTHLY RENT</label> 
                        <input type="text" value={this.state.housingForm.rent} onChange={this.handleChange('rent')}/> 
                        <label>RENT PAID BY</label> 
                        <input type="text" value={this.state.housingForm.paid_by} onChange={this.handleChange('paid_by')}/> 
                        <label>UTILITIES</label> 
                        <input type="text" value={this.state.housingForm.utilities} onChange={this.handleChange('utilities')}/> 
                        <label>LIVING WITH FAMILY Y/N</label> 
                        <input type="text" value={this.state.housingForm.living_with_fam} onChange={this.handleChange('living_with_fam')}/> 
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
  export default withRouter(connect(mapStateToProps)(HousingForm));