import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* registerUser(action) {
  try {
    console.log('action of payload', action.payload);
    
    yield axios.post('api/user/register', action.payload);

  } catch (error) {
      console.log('Error with volunteer registration:', error);
      alert(`Sorry couldn't add the new volunteer. Try again later.`)
  }
}

function* getUser(action) {
  try{
    console.log('GET all volunteers', action);
    const getResponse = yield axios.get('/api/user/register');
    const action = {type: 'SET_VOLUNTEER', payload: getResponse.data};
    yield put(action);
}catch (error) {
    console.log(`Couldn't get all the volunteers`);
    alert(`Sorry couldn't get all the volunteers. Try again later.`)
}
}

function* getVolBio(parse) {
  console.log('VOLUNTEER BIO payload', parse.payload);
  const user_id = parse.payload;
  try{
    console.log('GET info for VOLUNTEER BIO', user_id);
    const getResponse = yield axios.get(`/api/user/register/${user_id}`);
    const action = {type: 'SET_VOLUNTEER_BIO', payload: getResponse.data};
    yield put(action);
  }
  catch{

  }
}

function* getVolunteer(action) {
  try {

  console.log(`action.payload is: `, action.payload);
  const volunteer = action.payload.search;
  
  const response = yield axios.get(`/api/forms/volunteer`, action.payload);

  
  // yield put({ type: 'SET_ENTRIES', payload: response.data})
  }
  catch (error) {
    console.log(`Couldn't get user's entries`, error);
  }
}

function* getTeam(parse) {
  // console.log('VOLUNTEER BIO payload', parse.payload);
  // const user_id = parse.payload;
  try{
    console.log('GET TEAM in volunteer view');
    const getResponse = yield axios.get(`/api/forms/assign`);
    const action = {type: 'SET_TEAM', payload: getResponse.data};
    yield put(action);
  }
  catch{

  }
}


function* registrationSaga() {
  yield takeLatest('ADD_NEW_VOLUNTEER', registerUser);
  yield takeLatest('GET_ALL_VOLUNTEER', getUser);
  yield takeLatest('GET_VOLUNTEER_BIO', getVolBio);
  yield takeLatest('SEARCH_VOLUNTEER', getVolunteer);
  yield takeLatest('GET_TEAM', getTeam);
}

export default registrationSaga;
