import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'


 
class AddEvent extends Component {

    state = {
        addEvent: {
            description: '',
            date: '',
        }
    }

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            addEvent: {
                description: 'Upcoming Court Date at PTV City Center',
                date: '2019-12-12',
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


    newEvent = () => {
        console.log(`clicked add event! `);
        this.props.dispatch({ type: 'ADD_EVENT', payload: this.state.addEvent })
        this.props.history.push('/volunteer-events')
    }

    render() {
        return (
            <div>
                <Nav pageName='VOLUNTEER EVENT' volunteer home='/home' /> 
            <label>EVENT DATE:</label>
            <input type="text" 
                value={this.state.addEvent.date}
                onChange={this.handleNameChange('date')}/>
            <label>EVENT:</label>
            <input type="text" 
                value={this.state.addEvent.description}
                onChange={this.handleNameChange('description')}/>
            <button className="formButton" onClick={this.newEvent}>ADD EVENT</button> 
            <button className="formButton" onClick={this.autoPopulate}>FILL INFO</button> 
            </div>
        )}
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(AddEvent);