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


function* registrationSaga() {
  yield takeLatest('ADD_NEW_VOLUNTEER', registerUser);
  yield takeLatest('GET_ALL_VOLUNTEER', getUser);
}

export default registrationSaga;
