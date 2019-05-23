import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav';


class Events extends Component {
    render() {
        return (
            <div>
  <Nav pageName='EVENTS' home='/home'/>
               

                <center>
                    <button className="midButton">NEW EVENT</button> 

                    <div className="eventDivs" >
                        <div className='cardHead'>
                            <div className='cardHeadLeft'>
                                <h1 className="eventh1">CLIENT NAME</h1>
                            </div>
                            <div className='cardHeadRight'>
                                <p className="eventP">1-1-2019</p> 
                            </div>
                        </div>
                        <h1 className="eventh1">EVENT:</h1>
                        <p className="eventBody"> Client has a court date on 1-1-19 in downtown minneapolis at 1pm.</p>
                    </div>

                    <div className="eventDivs" >
                        <div className='cardHead'>
                            <div className='cardHeadLeft'>
                                <h1 className="eventh1">CLIENT NAME</h1>
                            </div>
                            <div className='cardHeadRight'>
                                <p className="eventP">12-15-2018</p> 
                            </div>
                        </div>
                        <h1 className="eventh1">EVENT:</h1>
                        <p className="eventBody"> Client has a housing meeting in uptowntown minneapolis at 1pm.</p>
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

