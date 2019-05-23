import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postIdentify(action) {
    try {
        console.log('POST identification form', action);
        yield axios.post(`/api/forms/identify`, action.payload);
    }catch (error) {
        console.log(`Couldn't POST the identification form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getIdentify(parse) {
    console.log('ID info payload', parse.payload);
    const case_id = parse.payload;
    try{
        console.log('GET info for identification', case_id);
        const getResponse = yield axios.get(`/api/forms/identify/${case_id}`);
        const action = {type: 'SET_IDENTIFY', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the identification form information`);
        alert(`Sorry couldn't get the information from the identification forms. Try again later.`)
    }
}

function* identifySaga() {
    yield takeLatest('ADD_IDENTIFY', postIdentify);
    yield takeLatest('GET_IDENTIFY', getIdentify);
}

export default identifySaga;
