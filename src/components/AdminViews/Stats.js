import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import { connect } from 'react-redux';

class Stats extends Component {

 componentDidMount() {
     this.props.dispatch({type: 'GET_CASES'});
    }
componentDidUpdate(prevProps) {

}
    render() {
        return (
            <div>
                <Nav pageName='STATS' home='/home'/>


                
                 <center>

                <p>Active Cases: </p>
                <p>Inactive Cases:</p>


               </center>
                
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Stats);