import React, { Component } from 'react';

class CaseList extends Component {

    searchBy = () => {
        console.log(`return result`);
    }

    viewCase = () => {
        this.props.history.push('/case-info')
    }

    render() {
        return (
            <div>
                <center> 
                    <div>CASE LIST</div>
                    <label>SEARCH </label>
                    <input type="text" placeholder="INSERT CASE NUMBER OR NAME" style={{width: 200}}/> <br /> 
                    <button onClick={this.searchBy}> SEARCH </button>
                    <p>when selecting the case, what is the on click? 
                    on click of td? on click of a checkbox? do we need a visual for that?</p>
                    <table> 
                        <thead> 
                            <tr>
                                <td> LAST NAME </td>
                                <td> FIRST NAME </td>
                            </tr>
                        </thead>               
                        <tbody>
                            {/* consider mappping over something to display cases in this table */}
                            <tr>
                                <td onClick={this.viewCase}> Vue </td>
                                <td> Juno</td>
                            </tr>
                        </tbody>
                    </table>
                </center>
            </div>
        );
    }
}

export default CaseList;