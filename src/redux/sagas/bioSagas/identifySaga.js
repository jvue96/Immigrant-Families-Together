import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postIdentify(action) {
    try {
        yield axios.post(`/api/forms/identify`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getIdentify(parse) {
    const case_id = parse.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/identify/${case_id}`);
        const action = {type: 'SET_IDENTIFY', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the identification forms. Try again later.`)
    }
}

function* identifySaga() {
    yield takeLatest('ADD_IDENTIFY', postIdentify);
    yield takeLatest('GET_IDENTIFY', getIdentify);
}

export default identifySaga;
