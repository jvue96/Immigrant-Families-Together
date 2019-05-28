import React, { Component } from 'react';
import { connect } from 'react-redux';

class Volunteers extends Component {

    state = {
        search: '',
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_ALL_VOLUNTEER' });
    }

    viewVolunteer = (event) => {
        console.log(`hit view volunteer!`);
        console.log(`!!!!0o9i8765`, event.target.dataset.value);
        // this.props.history.push('/volunteer-landing')
        this.props.history.push(`/volunteer-bio?id=${event.target.dataset.value}`)
    }

    handleChange = (event) => { 
        this.setState({
            search: event.target.value,
        }) 
    }

    searchBy = (event) => {
        this.setState({ 
            search: event.target.value, 
        });
        console.log(this.state);
        this.props.dispatch({type: 'SEARCH_VOLUNTEER', payload: this.state });
    }

    render() {
        return (
            <div>
                
                <div className="nav">
                    <div className="navLeft2" onClick={this.backButton}>
                        <i class="fas fa-chevron-left"></i>
                    </div>
                    <div className="navTitle">
                        <h2 className="navH2">ALL VOLUNTEER</h2>
                    </div>
                    <div className="navRight">
                    </div>
                </div>
                <center>
                    <input 
                        onChange={this.handleChange}
                        style={{width: 150, height: 20}} 
                        type="text" placeholder="CASE NUMBER / NAME" /> <br/>
                    <button 
                    className="formButton"
                    onClick={this.searchBy}> SEARCH </button> 

                {this.props.reduxState.volunteerReducer.map( (users, index) => {
                        return (
                                <div className="volCard">
                                <div className="grid-container" data-value={users.id} onClick={this.viewVolunteer} >
                                 <div className="grid-item" data-value={users.id}  > <i class="fas fa-user"></i> </div>
                                 <div className="grid-item2" data-value={users.id} > {users.username} </div>
                                 <div className="grid-item"  data-value={users.id} > <i class="fas fa-at"></i> </div>
                                 <div className="grid-item2" data-value={users.id} > {users.email} </div>
                                 <div className="grid-item" data-value={users.id} > <i class="fas fa-map-marker-alt"></i></div>
                                 <div className="grid-item2" data-value={users.id} > {users.address} </div>
                                </div>
                                </div>

                        // <table key={index} style={{width:300}}>
                        //     <thead>
                        //         <tr>
                        //             <td>USERNAME</td>
                        //             <td>EMAIL</td>
                        //             <td>ADDRESS</td>
                        //         </tr>
                        //     </thead>
                        // {/* map over cases assigned to volunteer */}
                        //     <tbody>
                        //         <tr>
                        //             <td
                        //             data-value={users.id}
                        //             onClick={this.viewVolunteer}>
                        //                 {users.username}
                        //             </td>
                        //             <td
                        //             data-value={users.id}
                        //             onClick={this.viewVolunteer}>
                        //                 {users.email}
                        //             </td>
                        //             <td
                        //             data-value={users.id}
                        //             onClick={this.viewVolunteer}>
                        //                 {users.address}
                        //             </td>
                        //         </tr>
                        //     </tbody>
                        // </table>
                        )
                        })}  
                </center>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(Volunteers);