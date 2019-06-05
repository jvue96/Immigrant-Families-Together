import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postChildren(action) {

    try {
        yield axios.post(`/api/forms/children`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getChildren(parse) {
    const case_id = parse.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/children/${case_id}`);
        const action = {type: 'SET_CHILDREN', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the children forms. Try again later.`)
    }
}

function* editChildren (action) {
    try {
        const getResponse = yield axios.put(`/api/forms/edit-children/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_CHILDREN', payload: getResponse.data });
    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* schoolSaga() {
    yield takeLatest('ADD_CHILDREN', postChildren);
    yield takeLatest('GET_CHILDREN', getChildren);
    yield takeLatest('PUT_CHILDREN', editChildren);
}

export default schoolSaga;
