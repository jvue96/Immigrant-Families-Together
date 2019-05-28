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

  function* getMedical(parse) {
    console.log('family bio info payload', parse.payload);
    const case_id = parse.payload;
    try{
        console.log('GET info for medical', case_id);
        const getResponse = yield axios.get(`/api/forms/medical/${case_id}`);
        const action = {type: 'SET_MEDICAL', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the medical form information`);
        alert(`Sorry couldn't get the information from the medical forms. Try again later.`)
    }
}

function* editMedical(action) {
    console.log('PUT for editing medical form', action.payload);
    try {
        const getResponse = yield axios.put(`/api/forms/edit-medical/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_MEDICAL', payload: getResponse.data });
    } catch (error) {
        console.log(`Couldn't PUT the current user`);
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* medicalSaga() {
    yield takeLatest('ADD_MEDICAL', postMedical);
    yield takeLatest('GET_MEDICAL', getMedical);
    yield takeLatest('PUT_MEDICAL', editMedical);
}

export default medicalSaga;
