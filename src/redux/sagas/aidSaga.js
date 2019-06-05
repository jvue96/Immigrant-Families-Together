import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addAidSaga(action) {
try {
yield axios.post(`/api/forms/aid`, action.payload);
}
catch(error) {
alert(`there was an error posting the aid form, please try again later`)
}
}

function* getAid(parse) {
    const case_id = parse.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/aid/${case_id}`);
        const action = {type: 'SET_AID', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the aid forms. Try again later.`)
    }
}

function* editAid(action) {
    try {
        const getResponse = yield axios.put(`/api/forms/edit-aid/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_AID', payload: getResponse.data });
    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* aidSaga() {
    yield takeLatest(`ADD_AID`, addAidSaga)
    yield takeLatest(`GET_AID`, getAid)
    yield takeLatest(`PUT_AID`, editAid)
}


export default aidSaga;