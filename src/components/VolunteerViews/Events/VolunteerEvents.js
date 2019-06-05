import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';
import moment from 'moment'

class Events extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('EVENT searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_CURRENT_ID', payload: searchObject.id });
        this.props.dispatch({ type: 'GET_EVENT', payload: searchObject.id });
    }


    // add new event 
    newEvent = () => {
        console.log(`clicked add event! `);
        this.props.history.push(`/add-event?id=${this.props.reduxState.caseIdReducer[0].id}`)
    }

    // formatting date 
    formatDate = (date) => {
        let entryDate =  moment(date).subtract(10, 'days').calendar();
        return entryDate; 
    }

    render() {

        // render this if eventReducer is empty
        let emptyBio;
        if(this.props.reduxState.eventReducer.length === 0) {
            emptyBio = <h1> There are no events for this case! </h1>
            
        } 

        return (
            <div>
                <Nav pageName='EVENTS' volunteer home='/home' /> 
                    <center>
                        <button className="midButton" onClick={this.newEvent}>NEW EVENT</button> 
                        <br/> 
                        {emptyBio}
                        <table>
                        <thead>
                            <tr>
                                <th>DATE</th>
                                <th>DESCRIPTION</th>
                            </tr>
                        </thead>
                    {/* map over cases assigned to volunteer */}
                        <tbody>
                        {this.props.reduxState.eventReducer.map((event, i) => {
                            return (
                            <tr key={i} onClick={this.viewCase}>
                                <td data-value={event.id}>
                                    {this.formatDate(event.date)}
                                </td>
                                <td>
                                    {event.description}
                                </td>
                            </tr>
                            )
                            })}
                        </tbody>
                    </table>

                    </center>
                </div>
        );
    }
}


const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Events);

