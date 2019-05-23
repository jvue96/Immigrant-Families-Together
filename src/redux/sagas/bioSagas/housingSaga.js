import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postHousing(action) {
    try {
        console.log('POST housing form', action);
        yield axios.post(`/api/forms/housing`, action.payload);
    }catch (error) {
        console.log(`Couldn't POST the housing form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getHousing(parse) {
    console.log('family bio info payload', parse.payload);
    const case_id = parse.payload;
    try{
        console.log('GET info for housing', case_id);
        const getResponse = yield axios.get(`/api/forms/housing/${case_id}`);
        const action = {type: 'SET_HOUSING', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the housing form information`);
        alert(`Sorry couldn't get the information from the housing forms. Try again later.`)
    }
}

function* housingSaga() {
    yield takeLatest('ADD_HOUSING', postHousing);
    yield takeLatest('GET_HOUSING', getHousing);
}

export default housingSaga;
