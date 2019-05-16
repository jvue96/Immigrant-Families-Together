import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import "./Volunteer.css";

import Notes from "./Notes";
import Bio from "./Bio";
import Legal from "./Legal";
import Aid from "./Aid";
import Team from "./Team";
import Events from "./Events";

class Case extends Component {

    

    render() {

        const { path } = this.props.match;
        console.log(`this is path: ${path}`);
        
        return (
            <div>
                <center>
                    <div><h1>VOLUNTEER CASES</h1></div> 
                    
                    {/* <button>LOGOUT</button>  */}

                    <div className="links">
                        <Link to={`${path}/events`} className="link">Events</Link>
                        <Link to={`${path}/notes`} className="link">Notes</Link>
                        <Link to={`${path}/bio`} className="link">Bio</Link>
                        <Link to={`${path}/legal`} className="link">Legal</Link>
                        <Link to={`${path}/aid`} className="link">Aid</Link>
                        <Link to={`${path}/team`} className="link">Team</Link>
                       
                        </div>
                        <div className="tabs">
                        <Switch>
                            <Route path={`${path}/events`} component={Events} />
                            <Route path={`${path}/notes`} exact component={Notes} />
                            <Route path={`${path}/bio`} component={Bio} />
                            <Route path={`${path}/legal`} component={Legal} />
                            <Route path={`${path}/aid`} component={Aid} />
                            <Route path={`${path}/team`} component={Team} />
                        </Switch>
                    </div>
                </center>
            </div>
        );
    }
}

export default Case;