import React, { Component } from 'react';

import { connect } from 'react-redux';

class Events extends Component {
    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>EVENTS</h1>
                    </div>
                    <div className="eventDivs" >
                        <p>CASE / CLIENT </p>
                        <p>FUTURE DATE, PASS DATE?</p> 
                        <p>EVENT:</p> 
                        <p> ____ has a court date on ____ in downtown minneapolis at 1pm. </p>
                        <p>where is the date? </p>
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
  export default connect(mapStateToProps)(Events);

