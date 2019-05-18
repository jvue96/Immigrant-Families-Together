import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addAidSaga(action) {
console.log(`inside addAidSaga, here is action:`, action);

}



function* aidSaga() {
    yield takeLatest(`ADD_AID`, addAidSaga)
}


export default aidSaga;