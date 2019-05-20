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



function* aidSaga() {
    yield takeLatest(`ADD_AID`, addAidSaga)
}


export default aidSaga;