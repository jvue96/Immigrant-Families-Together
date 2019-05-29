import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
import qs from 'query-string';

class Notes extends Component {

    componentDidMount = () => {
        const searchObject = qs.parse(this.props.location.search)
        console.log('EVENT searchObject', searchObject.id);
        this.props.dispatch({ type: 'GET_NOTE', payload: searchObject.id });
        console.log('GET_NOTE', this.props.reduxState.noteReducer);
        this.setState({
            addNote:{
                ...this.state.addNote,
                case_id: this.props.reduxState.caseIdReducer[0].id,
            }
        })
    }

  

    state = {
        addNote: {
            case_id: this.props.reduxState.caseIdReducer[0].id,
            family_notes: '',
            date: '',
        }
    }

    autoPopulate=()=>{
        console.log('in autoPopulate')
        this.setState({
            addNote: {
                case_id: this.props.reduxState.caseIdReducer[0].id,
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
        console.log(`clicked add note! `, this.state.addNote);
        this.props.dispatch({ type: 'ADD_NOTE', payload: this.state.addNote })
        this.props.dispatch({ type: 'GET_NOTE', payload: this.state.addNote.case_id });
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
        
                <div>
                    PREVIOUS NOTES
                </div>
                <div>{this.props.reduxState.noteReducer.map(notes =>
                <div>
<p className="bioDivs">DATE: {notes.date}</p>
<p className="bioDivs">NOTES: {notes.family_notes}</p>
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