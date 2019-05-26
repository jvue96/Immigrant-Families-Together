import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import { connect } from 'react-redux';
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
import ChildrenForm from "../AdminViews/Cases/Forms/ChildrenForm";
import CreateCase from '../AdminViews/Cases/Forms/CreateCase';
import EditCasesLanding from '../AdminViews/Cases/EditCasesLanding'
import EditCases from '../AdminViews/Cases/EditCases'
import CaseList from '../AdminViews/Cases/CaseList';
import VolunteerBio from "../AdminViews/VolunteerInfo/VolunteerBio";
import AidEdit from '../AdminViews/Cases/EditForms/AidEdit'
import './App.css';

/* volunteer imports */
import Case from "../VolunteerViews/Case";
import VolunteerLanding from "../VolunteerViews/VolunteerLanding";
import BioMedical from '../VolunteerViews/Bio/BioMedical'
import Bio from '../VolunteerViews/Bio/Bio'
import BioHousing from '../VolunteerViews/Bio/BioHousing'
//import BioIdentify from '../VolunteerViews/Bio/BioIdentify'
import BioSchool from '../VolunteerViews/Bio/BioSchool'
import BioFamilyInfo from '../VolunteerViews/Bio/BioFamilyInfo'
import VolunteerNotes from '../VolunteerViews/Notes/Notes'
import VolunteerLegal from '../VolunteerViews/Legal/Legal'
import LegalFacility from '../VolunteerViews/Legal/LegalFacility'
import LegalBond from '../VolunteerViews/Legal/LegalBond'
import LegalFoster from '../VolunteerViews/Legal/LegalFoster'
import LegalAttorney from '../VolunteerViews/Legal/LegalAttorney'
import LegalStatus from '../VolunteerViews/Legal/LegalStatus'
import VolunteerAid from '../VolunteerViews/Aid/Aid'
import VolunteerSocial from '../VolunteerViews/Aid/AidSocial'
import VolunteerGrocery from '../VolunteerViews/Aid/AidGrocery'
import VolunteerFund from '../VolunteerViews/Aid/AidFund'
import VolunteerTeam from '../VolunteerViews/Team/Team'
import VolunteerEvents from '../VolunteerViews/Events/VolunteerEvents'
import AddVolunteerEvent from '../VolunteerViews/Events/AddVolunteerEvent'




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

          {/* nav for all pages */}
          {/* <Nav /> */}

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
              path="/home"
              component={VolunteerLanding}
            />
            <ProtectedRoute
              exact
              path="/volunteer-landing"
              component={VolunteerLanding}
            />
            <AdminProtectedRoute
              exact
              path='/aid-form'
              component={AidForm}
            />

            <ProtectedRoute
              exact
              path='/events'
              component={Events}
            />
            <AdminProtectedRoute
              exact
              path='/attorney-form'
              component={AttorneyForm}
            />
            <AdminProtectedRoute
              exact
              path='/bond-form'
              component={BondForm}
            />
            <AdminProtectedRoute
              exact
              path='/foster-form'
              component={FosterForm}
            />
            <AdminProtectedRoute
              exact
              path='/fund-form'
              component={FundForm}
            />
            <AdminProtectedRoute
              exact
              path='/grocery-form'
              component={GroceryForm}
            />
            <AdminProtectedRoute
              exact
              path='/bio-form'
              component={BioForm}
            />
            <AdminProtectedRoute
              exact
              path='/housing-form'
              component={HousingForm}
            />
            <AdminProtectedRoute
              exact
              path="/ice-form"
              component={IceFacility} />
            <AdminProtectedRoute
              exact
              path='/legal-form'
              component={LegalStatusForm}
            />
            <AdminProtectedRoute
              exact
              path='/medical-form'
              component={MedicalForm}
            />
            <AdminProtectedRoute
              exact
              path='/school-form'
              component={SchoolForm}
            />
            <ProtectedRoute
              exact
              path='/social-form'
              component={SocialWorker}
            />


            <AdminProtectedRoute
              exact
              path="/admin-landing"
              component={AdminLanding}
            />

            <AdminProtectedRoute
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
              path="/case-list"
              component={CaseList}
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
            {/* <ProtectedRoute
              exact
              path="/bio-identification"
              component={BioIdentify}
            /> */}
            <ProtectedRoute
              exact
              path="/volunteer-events"
              component={VolunteerEvents}
            />
            <ProtectedRoute
              exact
              path="/volunteer-notes"
              component={VolunteerNotes}
            />
            <ProtectedRoute
              exact
              path="/volunteer-legal"
              component={VolunteerLegal}
            />
            <ProtectedRoute
              exact
              path="/legal-ice"
              component={LegalFacility}
            />
            <ProtectedRoute
              exact
              path="/legal-bond"
              component={LegalBond}
            />
            <ProtectedRoute
              exact
              path="/legal-foster"
              component={LegalFoster}
            />
            <ProtectedRoute
              exact
              path="/legal-attorney"
              component={LegalAttorney}
            />
            <ProtectedRoute
              exact
              path="/legal-status"
              component={LegalStatus}
            />
            <ProtectedRoute
              exact
              path="/volunteer-aid"
              component={VolunteerAid}
            />
            <ProtectedRoute
              exact
              path="/aid-social"
              component={VolunteerSocial}
            />
            <ProtectedRoute
              exact
              path="/aid-grocery"
              component={VolunteerGrocery}
            />
            <ProtectedRoute
              exact
              path="/aid-fund"
              component={VolunteerFund}
            />
            <ProtectedRoute
              exact
              path="/volunteer-team"
              component={VolunteerTeam}
            />
            <ProtectedRoute
              exact
              path="/volunteer-events"
              component={VolunteerEvents}
            />
            <ProtectedRoute
              exact
              path="/add-event"
              component={AddVolunteerEvent}
            />
            <ProtectedRoute
              exact
              path="/create-case"
              component={CreateCase}
            />
            <ProtectedRoute
              exact
              path="/children-form"
              component={ChildrenForm}
            />
            <ProtectedRoute
              exact
              path="/volunteer-bio"
              component={VolunteerBio}
            />
            <ProtectedRoute
              exact
              path="/edit-list"
              component={EditCasesLanding}
            />
            <ProtectedRoute
              exact
              path="/edit-case"
              component={EditCases}
            />
            <ProtectedRoute
              exact
              path="/aid-edit"
              component={AidEdit}
            />

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
