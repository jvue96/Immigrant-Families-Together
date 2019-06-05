import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

 
class AddEvent extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        this.props.dispatch({ type: 'GET_BOND', payload: searchObject.id });
        console.log('searchObject', searchObject);
        this.setState({
            addEvent:{
                ...this.state.addEvent,
                case_id: searchObject.id,
            }
        })  
    }

    state = {
        addEvent: {
            description: '',
            date: '',
            case_id: '', 
        }
    }

    autoPopulate=()=>{
        const searchObject = qs.parse(this.props.location.search)
        console.log('in autoPopulate')
        this.setState({
            addEvent: {
                description: 'Upcoming Court Date at PTV City Center',
                date: '2019-12-12',
                case_id: searchObject.id,
            }
        })
      }

     // set state for onChange of textfields 
     handleNameChange = (propertyName) => {  
        return(event) =>{
        this.setState({
            addEvent: {
                ...this.state.addEvent, 
                [propertyName]: event.target.value,
                }
            });
        }    
    }


    // add a new event
    // dispatch a POST and GET request for events 
    newEvent = () => {
        console.log(`clicked add event! `);
        this.props.dispatch({ type: 'ADD_EVENT', payload: this.state.addEvent })
        this.props.history.push(`/volunteer-events?id=${this.state.addEvent.case_id}`)


        const searchObject = qs.parse(this.props.location.search)
        console.log('EVENT searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_EVENT', payload: searchObject.id });
    }

    render() {
        return (
            <div>
                <Nav pageName='VOLUNTEER EVENT' volunteer home='/home' /> 
                <center> 
                    <label>EVENT DATE:</label>
                    <input type="date" 
                        value={this.state.addEvent.date}
                        onChange={this.handleNameChange('date')}/>
                    <label>EVENT:</label>
                    <input type="text" 
                        value={this.state.addEvent.description}
                        onChange={this.handleNameChange('description')}/>
                    <button className="formButton" onClick={this.newEvent}>ADD EVENT</button> 
                    <button className="formButton" onClick={this.autoPopulate}>FILL INFO</button> 
                </center>
            </div>
    )}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AddEvent);