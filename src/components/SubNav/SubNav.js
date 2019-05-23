import React, { Component } from 'react';
import {connect} from 'react-redux';
import {withRouter, Link} from 'react-router-dom';
import '../Nav/Nav.css'
const SubNav = () => {
        return (
            <div className="subnavbar">
            <div className="subNavSection">
            <Link to='/events'>     
                <h3>EVENTS</h3>
                    </Link>
            </div>
            <div className="subNavSection">
            <Link to='/events'>  
                <h3>BIO</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to='/events'>  
                <h3>LEGAL</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to='/events'>  
                <h3>AID</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to='/events'>  
                <h3>TEAM</h3>
                </Link>
            </div>
            <div className="subNavSection">
            <Link to='/events'>  
                <h3>NOTES</h3>
                </Link>
            </div>
            </div>
        )
    }

export default withRouter(SubNav);
  