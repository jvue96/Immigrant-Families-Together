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

  function* getMedical(action) {
    try{
        console.log('GET info for medical', action);
        const getResponse = yield axios.get('/api/forms/medical');
        const action = {type: 'SET_MEDICAL', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the medical form information`);
        alert(`Sorry couldn't get the information from the medical forms. Try again later.`)
    }
}

function* medicalSaga() {
    yield takeLatest('ADD_MEDICAL', postMedical);
    yield takeLatest('GET_MEDICAL', getMedical);
}

export default medicalSaga;
