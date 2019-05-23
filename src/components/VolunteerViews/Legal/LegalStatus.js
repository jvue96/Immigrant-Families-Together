import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class LegalStatus extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('LEGAL STATUS searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_LEGAL', payload: searchObject.id });
    }
    render() {
        return (
            <div>
             <Nav pageName='LEGAL STATUS' volunteer home='/home' /> 
                <center>
                    <div>{this.props.reduxState.legalReducer.map(legal =>
                <div>
<p className="bioDivs">LAST COURT DATE: {legal.last_court_date}</p>
<p className="bioDivs">LAST COURT DATE OUTCOME: {legal.last_court_date_outcome}</p>
<p className="bioDivs">NEXT COURT DATE: {legal.next_court_date}</p>
<p className="bioDivs">NEXT COURT DATE TOPIC: {legal.next_court_date_outcome}</p>
<p className="bioDivs">ASYLUM APPLICATION: {legal.asylum_application}</p>
<p className="bioDivs">WORK AUTH APPLICATION: {legal.work_authorization}</p>
                </div>
)}
</div>


                    {/* <label> LAST COURT DATE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>OUTCOME: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>NEXT COURT DATE: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>TOPIC: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>ASYLUM APPLIED FOR: Y/N: </label> <br/> 
                    <div className="bioDivs"> </div> <br/> 
                    <label>WORTH AUTHORIZATION Y/N: </label> <br/> 
                    <div className="bioDivs"> </div> <br/>  */}
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(LegalStatus);