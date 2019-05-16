import React, { Component } from 'react';

class Timeline extends Component {

    newEventButton = () => {
        console.log(`hit new event button!`);
        
    }

    render() {
        return (
            <div>
                <center> 
                    <div> TIMELINE </div>
                    <button onClick={this.newEventButton}>NEW EVENT</button>
                    <p> refer to wireframe 16</p>
                    <p> wireframe for form in works, Joe </p>
                </center>
            </div>
        );
    }
}

export default Timeline;