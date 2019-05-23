import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postLegal(action) {
    // console.log('payload of post tattoo', payload);
    
    // const payload = action.payload
    try {
        console.log('POSTING LEGAL FORM *****', action);
        const response = yield axios.post(`/api/forms/legal`, action.payload);

        /* ******* the saga will post, but enabling this set reducer will throw a bug, not quite sure whats wrong.  */
        /* reducer doesn't function  */
        // const action = {type: 'SET_LEGAL', payload: response.data};
        // yield put(action);
    }catch (error) {
        console.log(`Couldn't POST the legal form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getLegal(parse) {
    console.log('LEGAL STATUS INFO payload', parse.payload);
    const case_id = parse.payload;
    try{
        console.log('GET info for LEGAL STATUS', case_id);
        const getResponse = yield axios.get(`/api/forms/legal/${case_id}`);
        const action = {type: 'SET_LEGAL', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the medical form information`);
        alert(`Sorry couldn't get the information from the medical forms. Try again later.`)
    }
}

function* legalSaga() {
    yield takeLatest('ADD_LEGAL', postLegal);
    yield takeLatest('GET_LEGAL', getLegal);
}

export default legalSaga;
