import React, { Component } from 'react';

class CaseList extends Component {

    assignCase = () => {
        alert(`You've assigned a case to ___ !`);
        // do something here to assigned case and add into relevant databases 
    }

    searchBy = () => {
        console.log(`Do something for a search by!`);
        
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            CASE LIST
                        </h1>
                    </div>
                    <label>SEARCH:</label>
                    <input placeholder="NAME" type="text" /> 
                    <button onClick={this.searchBy}>SEARCH</button>

                    <table>
                        <thead>
                            <tr>
                                <td>LAST NAME </td>
                                <td>FIRST NAME </td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Douglas</td>
                                <td>Kingman</td>
                                <td><button onClick={this.assignCase}>Assign Case</button></td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        );
    }
}

export default CaseList;