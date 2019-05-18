import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postMedical(action) {
    // console.log('payload of post tattoo', payload);
    
    // const payload = action.payload
    try {
        console.log('POST medical form', action);
        const getResponse = yield axios.post(`/api/forms/medical`, action.payload);
        // const action = {type: 'SET_MEDICAL', payload: getResponse.data};
        // yield put(action);
    }catch (error) {
        console.log(`Couldn't POST the medical form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

function* medicalSaga() {
    yield takeLatest('ADD_MEDICAL', postMedical);
}

export default medicalSaga;
