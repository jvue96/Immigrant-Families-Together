import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'

class AidGrocery extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_AID' });
        console.log('GET_AID', this.props.reduxState.aidReducer);
    }
    
    render() {
        return (
            <div>
                <Nav pageName='GROCERY PROGRAM' volunteer home='/home' /> 
                <center>                    
                    <div>{this.props.reduxState.aidReducer.map(aid =>
                <div>
<p className="bioDivs">GROCERY PROGRAM: {aid.grocery_program}</p>
<p className="bioDivs">GROCERY PROGRAM VOLUNTEER: {aid.grocery_program_volunteer}</p>
                </div>
)}
</div>
                    
                    
                    {/* <label>GROCERY PROGRAM: Y/N </label> <br/>
                    <div className="bioDivs"> 
                    </div> <br/>
                    <label>VOLUNTEER: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> VOLUNTEER PHONE: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/>
                    <label> NOTES: </label> <br/>
                    <div className="bioDivs" >
                    </div> <br/> */}
                </center> 
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AidGrocery);