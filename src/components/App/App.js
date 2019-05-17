import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';

import AdminLanding from '../AdminViews.js/AdminLanding';
import RegisterVolunteer from '../AdminViews.js/RegisterVolunteer';
import Volunteers from '../AdminViews.js/Volunteers';

import Events from "../AdminViews/Events";

import AttorneyForm from '../AdminViews/AttorneyForm'
import BondForm from '../AdminViews/BondForm';
import FosterForm from '../AdminViews/FosterForm';
import FundForm from '../AdminViews/FundForm';
import GroceryForm from '../AdminViews/GroceryForm';
import BioForm from '../AdminViews/BioForm';
import HousingForm from '../AdminViews/HousingForm';
import LegalStatusForm from '../AdminViews/LegalStatusForm';
import MedicalForm from '../AdminViews/MedicalForm';
import SchoolForm from '../AdminViews/SchoolForm';


import './App.css';
import Cases from '../AdminViews.js/Cases';
import Events from '../AdminViews.js/Events';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            <ProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/info"
              component={InfoPage}
            />

            <ProtectedRoute
            exact
            path='/events'
            component={Events}
            />
            <ProtectedRoute
            exact
            path='/attorney-form'
            component={AttorneyForm}
            />
            <ProtectedRoute
            exact
            path='/bond-form'
            component={BondForm}
            />
            <ProtectedRoute
            exact
            path='/foster-form'
            component={FosterForm}
            />
            <ProtectedRoute
            exact
            path='/fund-form'
            component={FundForm}
            />
            <ProtectedRoute
            exact
            path='/grocery-form'
            component={GroceryForm}
            />
            <ProtectedRoute
            exact
            path='/bio-form'
            component={BioForm}
            />
            <ProtectedRoute
            exact
            path='/housing-form'
            component={HousingForm}
            />
            <ProtectedRoute
            exact
            path='/legal-form'
            component={LegalStatusForm}
            />
            <ProtectedRoute
            exact
            path='/medical-form'
            component={MedicalForm}
            />
            <ProtectedRoute
            exact
            path='/school-form'
            component={SchoolForm}
            />



          <ProtectedRoute
              exact
              path="/admin-landing"
              component={AdminLanding}
            />
          
          <ProtectedRoute
              exact
              path="/register-volunteer"
              component={RegisterVolunteer}
            />
          <ProtectedRoute
              exact
              path="/volunteers"
              component={Volunteers}
            />
          <ProtectedRoute
              exact
              path="/cases"
              component={Cases}
            />
          <ProtectedRoute
              exact
              path="/events"
              component={Events}
            />



            <Route path='/events' component={Events} />


            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
  )}
}

export default connect()(App);
