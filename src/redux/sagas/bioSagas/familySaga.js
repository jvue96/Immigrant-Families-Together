import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postFamily(action) {
    try {
        console.log('POST family form', action);
        yield axios.post(`/api/forms/family`, action.payload);
    }catch (error) {
        console.log(`Couldn't POST the family form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getFamily(action) {
    try{
        console.log('GET info for family', action);
        const getResponse = yield axios.get('/api/forms/family');
        const action = {type: 'SET_FAMILY', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the family form information`);
        alert(`Sorry couldn't get the information from the family forms. Try again later.`)
    }
}

function* familySaga() {
    yield takeLatest('ADD_FAMILY_INFO', postFamily);
    yield takeLatest('GET_FAMILY_INFO', getFamily);
}

export default familySaga;
