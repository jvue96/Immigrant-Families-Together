import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postHousing(action) {
    try {
        yield axios.post(`/api/forms/housing`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getHousing(parse) {
    const case_id = parse.payload;
    try{
        console.log('GET info for housing', case_id);
        const getResponse = yield axios.get(`/api/forms/housing/${case_id}`);
        const action = {type: 'SET_HOUSING', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the housing forms. Try again later.`)
    }
}

function* editHousing(action) {
    try {
        const getResponse = yield axios.put(`/api/forms/edit-housing/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_HOUSING', payload: getResponse.data });
    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* housingSaga() {
    yield takeLatest('ADD_HOUSING', postHousing);
    yield takeLatest('GET_HOUSING', getHousing);
    yield takeLatest('PUT_HOUSING', editHousing);
}

export default housingSaga;
