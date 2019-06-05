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
                </center>
            </div>
    )}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AddEvent);