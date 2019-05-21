import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Events extends Component {
    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_EVENT' });
        console.log('GET_EVENT', this.props.reduxState.eventReducer);
    }

    
    newEvent = () => {
        console.log(`clicked add event! `);
        this.props.history.push('/add-event')
    }

    render() {
        return (
            <div>

                <div className="nav">
                <div className="navLeft2" onClick={this.backButton}>
                    <i class="fas fa-chevron-left"></i>
                </div>
                <div className="navTitle">
                    <h2 className="navH2">EVENTS</h2>
                </div>
                <div className="navRight">
                <Link to="/home">
                    <i class="fas fa-home"></i>
                </Link>
                </div>
                </div>

                <center>
                    <button className="midButton" onClick={this.newEvent}>NEW EVENT</button> 

                    <div>{this.props.reduxState.eventReducer.map(event =>
                <div>
<p className="bioDivs">DATE: {event.date}</p>
<p className="bioDivs">EVENT DESCRIPTION: {event.description}</p>
                </div>
)}
</div>


                    {/* <div className="eventDivs" >
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
                    </div> */}

                </center>
            </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(Events);

