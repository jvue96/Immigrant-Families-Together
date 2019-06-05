import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class AidGrocery extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_AID', payload: searchObject.id });
    }
    
    render() {

        let emptyGrocery;
        if(this.props.reduxState.aidReducer.length === 0) {
            emptyGrocery =  <div className="bioCard">
                            <hr/>
                            <label>GROCERY PROGRAM:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>GROCERY PROGRAM VOLUNTEER:</label>
                            <p className="PCard"></p>
                            <hr/>
                        </div>
                    }

        return (
            <div>
                <Nav pageName='GROCERY PROGRAM' volunteer home='/home' /> 
                    <center>                    
                        <div>
                        {emptyGrocery}
                        {this.props.reduxState.aidReducer.map((aid,index) =>
                            <div className="bioCard" key={index}>
                                <hr/>
                                <label>GROCERY PROGRAM:</label>
                                <p className="PCard">{String(aid.grocery_program)}</p>
                                <hr/>
                                <label>GROCERY PROGRAM VOLUNTEER:</label>
                                <p className="PCard"> {aid.grocery_program_volunteer}</p>
                                <hr/>
                            </div>
                            )}
                            </div>
                    </center> 
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AidGrocery);