import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav';
import moment from 'moment';

class Events extends Component {
    

    state = {
        search: '',
    }

    setSearch = (event) => {
        this.setState({
            search: event.target.value
        })
        console.log(this.state);
    }

  searchBy = () => {
        this.props.dispatch({ type: 'GET_SEARCH_EVENTS', payload: this.state });
    }

    componentDidMount() {
        this.props.dispatch({type:'GET_ALL_EVENTS'})
    }

    
    render() {
        return (
            <div>
  <Nav pageName='EVENTS' home='/home'/>
               

                <center>
                    <h1>Upcoming Events</h1>
                    <h2>Search Cases</h2>
                    <input onChange={this.setSearch} placeholder="Search by" type="text" />
                    <button className='searchButton' onClick={this.searchBy}>SEARCH</button>
            {this.props.allEvents.map((event, i) =>
                    <div key={i} className="eventDivs" >
                        <div className='cardHead'>
                            <div className='cardHeadLeft'>
                                <h1 className="eventh1">Last Name: {event.case_last_name}</h1>
                                <h2 className="eventh1">Case #: {event.case_number}</h2>
                            </div>
                            <div className='cardHeadRight'>
                                <p className="eventP">Date: {moment(event.date).format('L')}</p> 
                            </div>
                        </div>
                        <h1 className="eventh1">EVENT:</h1>
                        <p className="eventBody">{event.description}</p>
                    </div>
            )}
                  

                </center>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
    allEvents: state.allEventsReducer,
  });
  
  // this allows us to use <App /> in index.js
  export default connect(mapStateToProps)(Events);

