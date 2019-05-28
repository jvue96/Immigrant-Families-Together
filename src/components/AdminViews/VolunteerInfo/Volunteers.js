import React, { Component } from 'react';
import { connect } from 'react-redux';
import Nav from '../../Nav/Nav'
class Volunteers extends Component {

    state = {
        search: '',
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_ALL_VOLUNTEER' });
    }

    viewVolunteer = (event) => {
        // console.log(`hit view volunteer!`);
        // console.log(`!!!!0o9i8765`,event.target.dataset.value);
        // this.props.history.push('/volunteer-landing')
        this.props.history.push(`/volunteer-bio?id=${event.target.dataset.value}`)
    }

    handleChange = (event) => { 
        this.setState({
            search: event.target.value,
        })
        console.log(`this is state inside of handleChange:`, this.state);         
    }

    searchBy = (event) => {
        console.log(`inside searchBy, here is state:`, this.state);
      this.props.dispatch({type: 'SEARCH_VOLUNTEER', payload: this.state });
    }

    render() {
        return (
            <div>
                
                <Nav pageName='VOLUNTEERS' home='/home'/>
                <center>
                    <input 
                        onChange={this.handleChange}
                        type="text" placeholder="VOLUNTEER INFO" /> <br/>
                    <button 
                    className="formButton"
                    onClick={this.searchBy}> SEARCH </button> 
        
                        <table>
                            <thead>
                                <tr>
                                    <td>USERNAME</td>
                                    <td>EMAIL</td>
                                    <td>ADDRESS</td>
                                </tr>
                            </thead>
                        {/* map over cases assigned to volunteer */}
                            <tbody>
                            {this.props.reduxState.volunteerReducer.map( (users, index) => {
                        return (
                                <tr key={index}>
                                    <td 
                                    data-value={users.id}
                                    onClick={this.viewVolunteer}>
                                        {users.username}
                                    </td>
                                    <td style={{wordBreak:"break-all"}}
                                    data-value={users.id}
                                    onClick={this.viewVolunteer}>
                                        {users.email}
                                    </td>
                                    <td 
                                    data-value={users.id}
                                    onClick={this.viewVolunteer}>
                                        {users.address}
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

export default connect(mapReduxStateToProps)(Volunteers);