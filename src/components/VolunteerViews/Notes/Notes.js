import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'

class Notes extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_NOTE' });
        console.log('GET_NOTE', this.props.reduxState.noteReducer);
    }

    state = {
        addNote: {
            family_notes: '',
            date: '',
        }
    }

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            addNote: {
                family_notes: 'Visited in morning to discuss the lawyer agreeing to work probono',
                date: '2019-12-12',
            }
        })
      }

     // set state for onChange of textfields 
     handleNameChange = (propertyName) => {  
        return(event) =>{
        this.setState({
            addNote: {
                ...this.state.addNote, 
                [propertyName]: event.target.value,
                }
            });
        }    
    }

    addNote = () => {
        console.log(`clicked add note! `);
        this.props.dispatch({ type: 'ADD_NOTE', payload: this.state.addNote })
        this.props.dispatch({ type: 'GET_NOTE' });
    }

    render() {
        return (
            <div>
            <Nav pageName='NOTES' volunteer home='/home' /> 

            <center> 
                    <label>ADD NOTE:</label>
                    <input type="text" 
                        value={this.state.addNote.family_notes}
                        onChange={this.handleNameChange('family_notes')}/>
                        <label>NOTE DATE:</label>
                    <input type="text" 
                        value={this.state.addNote.date}
                        onChange={this.handleNameChange('date')}/>
                    <button className="formButton" onClick={this.addNote}>ADD</button> 
                    <button className="formButton" onClick={this.autoPopulate}>FILL INFO</button> 
        
                <h1>
                    PREVIOUS NOTES
                </h1>
                <div>{this.props.reduxState.noteReducer.map(notes =>
                <div className="noteCard">
                        <p className="PNote" >{notes.date}</p>
                        <hr/>
                        <p className="PNote" >NOTE:</p>
                    <p className="PNote" >{notes.family_notes}</p>
                </div>
            )}
    </div>

                    {/* <div className="bioDivs"> </div>
                    <hr style={{width: 200}}/>
                    <div className="bioDivs">
                    <label>CASE/CLIENT</label>
                    <label>DATE</label> <br/>
                    <label> NOTES:</label>
                    <p> insert text in here blah blah blah </p>
                    </div> */}

                    
            </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
    });

export default connect(mapReduxStateToProps)(Notes);