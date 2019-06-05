import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postSchool(action) {
    try {
        yield axios.post(`/api/forms/school`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getSchool(parse) {
    const case_id = parse.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/school/${case_id}`);
        const action = {type: 'SET_SCHOOL', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the school forms. Try again later.`)
    }
}

function* editSchool(action) {
    try {
        const getResponse = yield axios.put(`/api/forms/edit-school/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_SCHOOL', payload: getResponse.data });
    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* schoolSaga() {
    yield takeLatest('ADD_SCHOOL', postSchool);
    yield takeLatest('GET_SCHOOL', getSchool);
    yield takeLatest('PUT_SCHOOL', editSchool);
}

export default schoolSaga;
 