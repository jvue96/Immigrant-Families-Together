import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    yield axios.post('api/user/register', action.payload);

  } catch (error) {
      alert(`Sorry couldn't add the new volunteer. Try again later.`)
  }
}

function* getUser(action) {
  try{
    const getResponse = yield axios.get('/api/user/register');
    const action = {type: 'SET_VOLUNTEER', payload: getResponse.data};
    yield put(action);
}catch (error) {
    alert(`Sorry couldn't get all the volunteers. Try again later.`)
}
}

function* getVolBio(parse) {
  const user_id = parse.payload;
  try{
    const getResponse = yield axios.get(`/api/user/register/${user_id}`);
    const action = {type: 'SET_VOLUNTEER_BIO', payload: getResponse.data};
    yield put(action);
  }
  catch{
    alert(`Error getting volunteer's bio! Try again later.`)
  }
}

function* getVolunteerSearch(action) {
  try {
  const searchResponse = yield axios.get(`/api/forms/volunteer/search/?q=${action.payload.search}`);
  const setVolunteers = {type: 'SET_VOLUNTEER', payload: searchResponse.data};
  yield put(setVolunteers);
  
  // yield put({ type: 'SET_ENTRIES', payload: response.data})
  }
  catch (error) {
    alert(`Error getting user entries.`)
  }
}

function* getTeam(parse) {
  const id = parse.payload;
  try{
    const getResponse = yield axios.get(`/api/forms/assign/${id}`);
    const action = {type: 'SET_TEAM', payload: getResponse.data};
    yield put(action);
  }
  catch{
    alert(`Error getting team.`)
  }
}

function* getVolunteerCases(parse) {
  const user_id = parse.payload;
  try{
    const getResponse = yield axios.get(`/api/forms/volunteer-caseload/${user_id}`);
    const action = {type: 'SET_VOLUNTEER_CASES', payload: getResponse.data};
    yield put(action);
  }
  catch{
    alert(`Error getting volunteer's cases.`)
  }
}


function* registrationSaga() {
  yield takeLatest('ADD_NEW_VOLUNTEER', registerUser);
  yield takeLatest('GET_ALL_VOLUNTEER', getUser);
  yield takeLatest('GET_VOLUNTEER_BIO', getVolBio);
  yield takeLatest('SEARCH_VOLUNTEER', getVolunteerSearch);
  yield takeLatest('GET_TEAM', getTeam);
  yield takeLatest('GET_VOLUNTEER_CASES', getVolunteerCases);
}

export default registrationSaga;
