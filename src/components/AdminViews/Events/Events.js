import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Events extends Component {
    render() {
        return (
            <div>

                <div className="nav">
                <div className="navLeft2" onClick={this.backButton}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">EVENTS</h2>
                </div>
                <div className="navRight">
                <Link to="/home">
                    <i className="fas fa-home"></i>
                </Link>
                </div>
                </div>

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

