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

function* registrationSaga() {
  yield takeLatest('ADD_NEW_VOLUNTEER', registerUser);
}

export default registrationSaga;
