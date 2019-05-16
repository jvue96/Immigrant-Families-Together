import React, { Component } from 'react';

class HousingForm extends Component {

    next = () => {
        this.props.history.push('/ice-form')
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <h1>
                            HOUSING
                        </h1>
                    </div>
                    <div className="formDivs">
                        <label>ADDRESS</label> <br/>
                        <input type="text" /> <br/>
                        <label>MONTHLY RENT</label> <br/>
                        <input type="text" /> <br/>
                        <label>RENT PAID BY</label> <br/>
                        <input type="text" /> <br/>
                        <label>UTILITIES</label> <br/>
                        <input type="text" /> <br/>
                        <label>LIVING WITH FAMILY Y/N</label> <br/>
                        <input type="text" /> <br/>
                        <button
                        onClick={this.next}
                        >NEXT</button>
                    </div>
                </center>
            </div>
        );
    }
}

export default HousingForm;