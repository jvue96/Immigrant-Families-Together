import React, { Component } from 'react';
import { connect } from 'react-redux';
import qs from 'query-string';
import Nav from '../../Nav/Nav'


class BioSchool extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_SCHOOL', payload: searchObject.id });
    }

    render() {

        // if aidReducer is empty, render labels with empty information 
        let emptySchool;
        if(this.props.reduxState.schoolReducer.length === 0) {
            emptySchool = <div className="bioCard">
                            <hr/>
                            <label>SCHOOL NAME:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>PHONE:</label>
                            <p className="PCard"></p>
                            <hr/>
                            <label>EMAIL:</label>
                            <p className="PCard"></p>
                            <hr/>
                        </div>
                    }

        return (
            <div>
                <Nav pageName='SCHOOL' volunteer home='/home' /> 
                    <center>
                        <div>
                            {emptySchool}
                            {this.props.reduxState.schoolReducer.map((school,index) =>
                                        <div className="bioCard" key={index}>
                                            <hr/>
                                            <label>SCHOOL NAME:</label>
                                            <p className="PCard"> {school.name}</p>
                                            <hr/>
                                            <label>PHONE:</label>
                                            <p className="PCard"> {school.phone}</p>
                                            <hr/>
                                            <label>EMAIL:</label>
                                            <p className="PCard"> {school.email}</p>
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

export default connect(mapReduxStateToProps)(BioSchool);