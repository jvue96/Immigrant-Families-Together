import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postLegal(action) {
    // console.log('payload of post tattoo', payload);
    
    // const payload = action.payload
    try {
        const response = yield axios.post(`/api/forms/legal`, action.payload);
        /* ******* the saga will post, but enabling this set reducer will throw a bug, not quite sure whats wrong.  */
        /* reducer doesn't function  */
        // const action = {type: 'SET_LEGAL', payload: response.data};
        // yield put(action);
    }catch (error) {
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getLegal(parse) {
    const case_id = parse.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/legal/${case_id}`);
        const action = {type: 'SET_LEGAL', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the medical forms. Try again later.`)
    }
}
  function* editLegal(action) {
    try {
        const getResponse = yield axios.put(`/api/forms/edit-legal/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_LEGAL', payload: getResponse.data });
    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
}

function* legalSaga() {
    yield takeLatest('ADD_LEGAL', postLegal);
    yield takeLatest('GET_LEGAL', getLegal);
    yield takeLatest('PUT_LEGAL', editLegal);
}

export default legalSaga;
