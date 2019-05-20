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

function* legalSaga() {
    yield takeLatest('ADD_LEGAL', postLegal);
}

export default legalSaga;
