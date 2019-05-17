import React, { Component } from 'react';

class Notes extends Component {

    addNote = () => {
        console.log(`clicked add note! `);
        // do something
    }

    render() {
        return (
            <center> 
                    <div> 
                        <h1>
                            NOTES
                        </h1>
                    </div>
                    {/* loop over and create below for each event */}
                    <label>ADD NOTE:</label> 
                    <button onClick={this.addNote}> ADD </button>
                    <div className="bioDivs"> </div>
                    <hr style={{width: 200}}/>
                    <div className="bioDivs">
                    <label>CASE/CLIENT</label>
                    <label>DATE</label> <br/>
                    <label> NOTES:</label>
                    <p> insert text in here blah blah blah </p>
                    </div>

                    
            </center>
        );
    }
}

export default Notes;