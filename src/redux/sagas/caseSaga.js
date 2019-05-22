import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postCase(action) {
    try { 
        let post = yield axios.post(`/api/forms/case`, action.payload);
        const response = {type: 'SET_CASE', payload: post.data};
        yield put(response);
    }catch (error) {
        console.log(`Couldn't POST the case information form`, error);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

function* caseSaga() {
    yield takeLatest('ADD_CASE', postCase);
}

export default caseSaga;
