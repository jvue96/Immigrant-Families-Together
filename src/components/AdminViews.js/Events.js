import React, { Component } from 'react';

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

export default Events;