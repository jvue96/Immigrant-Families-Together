import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'
import Nav from '../../../Nav/Nav'
import qs from 'query-string';


class HousingForm extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('housingForm searchObject', searchObject);
        this.setState({
            housingForm:{
                ...this.state.housingForm,
                case_id: searchObject.id,
            }
        })  
    }

state= {
    housingForm: {
        case_id: this.props.reduxState.caseReducer.rows[0].id,
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
            case_id: this.props.reduxState.caseReducer.rows[0].id,
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

        this.props.history.push(`/aid-form?id=${this.state.housingForm.case_id}`)
}

    render() {
        return (
            <div>
                <Nav pageName='HOUSING' home='/home'/>
                <center>
                    <div className="formDivs">
                        <label>ADDRESS</label> 
                        <input type="text" value={this.state.housingForm.address} onChange={this.handleChange('address')}/> 
                        <label>MONTHLY RENT</label> 
                        <input type="text" value={this.state.housingForm.rent} onChange={this.handleChange('rent')}/> 
                        <label>RENT PAID BY</label> 
                        <input type="text" value={this.state.housingForm.paid_by} onChange={this.handleChange('paid_by')}/> 
                        <label>UTILITIES</label> 
                        <input type="text" value={this.state.housingForm.living_with_fam}  onChange={this.handleChange('living_with_fam')}/> 
                        <label>LIVING WITH FAMILY</label> 
                        <select 
                        onChange={this.handleChange(`us_id`)}
                        >
                            <option>-</option>
                            <option
                            selected="selected"
                            value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                        <button
                            className="formButton"
                            onClick={this.next}>
                            NEXT
                        </button>
                        <button className="formButton"
                        onClick={this.fillstate}>
                            Fill Info
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
  
  // this allows us to use <App /> in index.js
  export default withRouter(connect(mapStateToProps)(HousingForm));