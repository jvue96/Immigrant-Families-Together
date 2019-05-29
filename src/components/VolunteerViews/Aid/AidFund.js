import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';


class AidFund extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL BioMedical searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_AID', payload: searchObject.id });
    }

    render() {
        return (
            <div>
                <Nav pageName='GOFUNDME' volunteer home='/home' /> 
                 <center>  
                    <div>{this.props.reduxState.aidReducer.map(aid =>
                <div className="bioCard">
                    <hr/>
                    <label>GOFUNDME LINK:</label>
                    <p className="PCard"> {aid.go_fund_me}</p>
                    <hr/>
                </div>
)}
</div>




                    {/* <label>LINK </label> <br/>
                    <div className="bioDivs"> 
                    </div> <br/> */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AidFund);