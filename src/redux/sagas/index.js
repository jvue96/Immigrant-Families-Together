import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import legalSaga from "./legalSaga";
import medicalSaga from './bioSagas/medicalSaga';
import volunteerSaga from './volunteerSaga';
import aidSaga from './aidSaga';
import bioSaga from './bioSaga';
import familySaga from './bioSagas/familySaga';
import housingSaga from './bioSagas/housingSaga';
import identifySaga from './bioSagas/identifySaga';
import schoolSaga from './bioSagas/schoolSaga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    medicalSaga(),
    legalSaga(),
    volunteerSaga(),
    aidSaga(),
    bioSaga(),
    familySaga(),
    housingSaga(),
    identifySaga(),
    schoolSaga(),
  ]);
}
