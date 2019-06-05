import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postFamily(action) {
    try {
        yield axios.post(`/api/forms/family`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getFamily(action) {
    const payload = action.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/family/${payload}`);
        const action = {type: 'SET_FAMILY', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the family forms. Try again later.`)
    }
}

function* familySaga() {
    yield takeLatest('ADD_FAMILY_INFO', postFamily);
    yield takeLatest('GET_FAMILY_INFO', getFamily);
}

export default familySaga;
