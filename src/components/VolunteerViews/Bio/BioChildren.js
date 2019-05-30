import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class BioChildren extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('GENERAL BIO CHILDREN searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_CHILDREN', payload: searchObject.id });
        console.log('GET_CHILDREN', this.props.reduxState.bioReducer);
    }

    render() {

        let emptyHousing; 
        if(this.props.reduxState.childrenReducer.length === 0) {
            emptyHousing = <div className="bioCard">
                                <hr/>
                                <label>CHILD NAME:</label>  
                                <p className="PCard"></p>
                                <hr/>
                                <label>CHILD DOB:</label>  
                                <p className="PCard"></p>
                                <hr/>
                                <label>ADDITIONAL INFO:</label>  
                                <p className="PCard"></p>
                                <hr/>
                            </div>
                        } 


        return (
            <div>
                <Nav pageName='HOUSING' volunteer home='/home' /> 
                    <center>    
                        <div>
                            {emptyHousing}
                            {this.props.reduxState.childrenReducer.map((children,index) =>
                                <div className="bioCard" key={index}>
                                    <hr/>
                                    <label>CHILD NAME:</label>  
                                    <p className="PCard">{children.child_name}</p>
                                    <hr/>
                                    <label>CHILD DOB:</label>  
                                    <p className="PCard">{children.child_dob}</p>
                                    <hr/>
                                    <label>ADDITIONAL INFO:</label>  
                                    <p className="PCard">{children.child_info}</p>
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

export default connect(mapReduxStateToProps)(BioChildren);