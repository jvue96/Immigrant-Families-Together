import React, { Component } from 'react';
import Nav from '../../Nav/Nav';
import { connect } from 'react-redux';

class CaseList extends Component {

    state = {
        search: '',
    }

    setSearch = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    assignCase = () => {
        alert(`You've assigned a case to ___ !`);
        // do something here to assigned case and add into relevant databases 
    }

    searchBy = () => {
        this.props.dispatch({ type: 'GET_CASES_SEARCH', payload: this.state });
    }

    selectCase = (id) => {
        //this.props.history.push(`/case/?id=${id}&admin=true`);
        //this is from volunteer landing:
        this.props.dispatch({type: 'GET_CURRENT_ID', payload: id})
        this.props.history.push(`/case?id=${id}`)


    }

    componentDidMount() {
        //checks to see if there is a query selector
            this.props.dispatch({ type: 'GET_CASES' });
       }


    render() {
        return (
            <div>
                <Nav pageName='CASE LIST' home='/home' />
                <center>
                    <label>SEARCH:</label>
                    <input onChange={this.setSearch} placeholder="NAME" type="text" />
                    <button className='searchButton' onClick={this.searchBy}>SEARCH</button>

                    <table>
                        <thead>
                            <tr>
                                <td>LAST NAME </td>
                                <td>CASE NUMBER </td>
                                {/* <td>ASSIGN CASE</td> */}
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.reduxState.allCasesReducer.map(i =>
                                <tr onClick={() => this.selectCase(i.id)} key={i.id}>
                                    <td>{i.case_last_name}</td>
                                    <td>{i.case_number}</td>
                                    {/* <td><button onClick={this.assignCase}>Assign Case</button></td> */}
                                </tr>
                            )}
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


export default connect(mapReduxStateToProps)(CaseList);