import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import AdminProtectedRoute from '../ProtectedRoute/AdminProtectedRoute'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import UserPage from '../UserPage/UserPage';
import AdminLanding from '../AdminViews/AdminLanding';
import RegisterVolunteer from '../AdminViews/VolunteerInfo/RegisterVolunteer';
import Volunteers from '../AdminViews/VolunteerInfo/Volunteers';
import Events from "../AdminViews/Events/Events";
import AttorneyForm from '../AdminViews/Cases/Forms/AttorneyForm'
import BondForm from '../AdminViews/Cases/Forms/BondForm';
import FosterForm from '../AdminViews/Cases/Forms/FosterForm';
import FundForm from '../AdminViews/Cases/Forms/FundForm';
import GroceryForm from '../AdminViews/Cases/Forms/GroceryForm';
import BioForm from '../AdminViews/Cases/Forms/BioForm';
import HousingForm from '../AdminViews/Cases/Forms/HousingForm';
import LegalStatusForm from '../AdminViews/Cases/Forms/LegalStatusForm';
import MedicalForm from '../AdminViews/Cases/Forms/MedicalForm';
import SchoolForm from '../AdminViews/Cases/Forms/SchoolForm';
import IceFacility from "../AdminViews/Cases/Forms/IceFacility";
import SocialWorker from "../AdminViews/Cases/Forms/SocialWorker";
import Cases from '../AdminViews/Cases/Cases';
import AidForm from '../AdminViews/Cases/Forms/AidForm';
import './App.css';

/* volunteer imports */
import Case from "../VolunteerViews/Case";
import VolunteerLanding from "../VolunteerViews/VolunteerLanding";
import BioMedical from '../VolunteerViews/Bio/BioMedical'
import Bio from '../VolunteerViews/Bio/Bio'
import BioHousing from '../VolunteerViews/Bio/BioHousing'
import BioIdentify from '../VolunteerViews/Bio/BioIdentify'
import BioSchool from '../VolunteerViews/Bio/BioSchool'
import BioFamilyInfo from '../VolunteerViews/Bio/BioFamilyInfo'




class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  // homeLanding = () => {
  //   if(this.props.reduxState.user.id === 1) {
  //     return <Redirect exact from="/" to="/home" />
  //   } else {
  //     return <Redirect exact from="/" to="/volunteer-landing" />
  //   }
  // }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            {/* {this.homeLanding} */}
            <Redirect exact from="/" to="/home" />
            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            
            <AdminProtectedRoute
              exact
              path="/home"
              component={UserPage}
            />
            <ProtectedRoute
              exact
              path="/volunteer-landing"
              component={VolunteerLanding}
            />
            <ProtectedRoute
              exact
              path='/aid-form'
              component={AidForm}
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
              path="/ice-form"
              component={IceFacility} />
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
              path='/social-form'
              component={SocialWorker}
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
             <ProtectedRoute
              exact
              path="/bio-medical"
              component={BioMedical}
            />
            <ProtectedRoute
              exact
              path="/bio"
              component={Bio}
            />
            <ProtectedRoute
              exact
              path="/bio-family-info"
              component={BioFamilyInfo}
            />
            <ProtectedRoute
              exact
              path="/bio-housing"
              component={BioHousing}
            />
            <ProtectedRoute
              exact
              path="/bio-school"
              component={BioSchool}
            />
            <ProtectedRoute
              exact
              path="/bio-identification"
              component={BioIdentify}
            />

            <Route path='/events' component={Events} />

            {/* volunteer views link */}
            <ProtectedRoute path="/case" component={Case} />
            <ProtectedRoute path="/volunteer-landing" component={VolunteerLanding} />

            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState
  });

export default connect(mapReduxStateToProps)(App);
