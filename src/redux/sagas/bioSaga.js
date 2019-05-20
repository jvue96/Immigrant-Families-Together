import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addBioSaga(action) {
console.log(`inside addBioSaga, here is action:`, action);
// try {
// yield axios.post(`/api/forms/bio`, action.payload);
// }
// catch(error) {
// alert(`there was an error posting the aid form, please try again later`)
// console.log(`error posting to DB:`, error);
// }
}



function* bioSaga() {
    yield takeLatest(`ADD_BIO`, addBioSaga)
}


export default bioSaga;