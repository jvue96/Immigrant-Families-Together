import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addAidSaga(action) {
console.log(`inside addAidSaga, here is action:`, action);
try {
yield axios.post(`/api/forms/aid`, action.payload);
}
catch(error) {
alert(`there was an error posting the aid form, please try again later`)
console.log(`error posting to DB:`, error);
}
}

function* getAid(parse) {
    console.log('LEGAL ICE FACILITY INFO payload', parse.payload);
    const case_id = parse.payload;
    try{
        console.log('GET info for aid', case_id);
        const getResponse = yield axios.get(`/api/forms/aid/${case_id}`);
        const action = {type: 'SET_AID', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the aid form information`);
        alert(`Sorry couldn't get the information from the aid forms. Try again later.`)
    }
}

function* editAid(action) {
    console.log('PUT for editing aid form', action.payload);
    try {
        const getResponse = yield axios.put(`/api/forms/edit-aid/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_AID', payload: getResponse.data });
    } catch (error) {
        console.log(`Couldn't PUT the current user`);
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* aidSaga() {
    yield takeLatest(`ADD_AID`, addAidSaga)
    yield takeLatest(`GET_AID`, getAid)
    yield takeLatest(`PUT_AID`, editAid)
}


export default aidSaga;