import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postCase(action) {
    try { 
        let post = yield axios.post(`/api/forms/case`, action.payload);
        const response = {type: 'SET_CASE', payload: post.data};
        yield put(response);
    } catch (error) {
        console.log(`Couldn't POST the case information form`, error);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

function* getCases(action) {
    try {
        let get = yield axios.get(`api/forms/all-cases`);
        const response = {type: 'SET_ALL_CASES', payload: get.data };
        yield put(response); 
    } catch (error) {
        console.log(`Couldn't get all cases`, error);
        alert(`Sorry couldn't get all cases. Try again later.`)
    }
}

function* getCaseId(action) {
    console.log('payload', action.payload);
    const payload = action.payload;
 
    try {
        console.log(payload);
 
        console.log('GET current id for clicked case', payload);
        const getResponse = yield axios.get(`/api/forms/all-cases/${payload}`);
        console.log('getResponse:', getResponse);
 
        const action = {type: 'SET_CURRENT_ID', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the current ID`);
        alert(`Sorry couldn't get the current ID. Try again later.`)
    }
  }


function* caseSaga() {
    yield takeLatest('ADD_CASE', postCase);
    /* volunteer landing page  */
    yield takeLatest('GET_CASES', getCases);
    yield takeLatest('GET_CURRENT_ID', getCaseId);

}

export default caseSaga;
