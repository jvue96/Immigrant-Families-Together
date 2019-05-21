import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postSchool(action) {
    try {
        console.log('POST school form', action);
        yield axios.post(`/api/forms/school`, action.payload);
    }catch (error) {
        console.log(`Couldn't POST the school form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getSchool(action) {
    try{
        console.log('GET info for school', action);
        const getResponse = yield axios.get('/api/forms/school');
        const action = {type: 'SET_SCHOOL', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the school form information`);
        alert(`Sorry couldn't get the information from the school forms. Try again later.`)
    }
}

function* schoolSaga() {
    yield takeLatest('ADD_SCHOOL', postSchool);
    yield takeLatest('GET_SCHOOL', getSchool);
}

export default schoolSaga;
 