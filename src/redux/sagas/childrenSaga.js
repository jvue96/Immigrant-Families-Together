import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postChildren(action) {

    try {
        
        yield axios.post(`/api/forms/children`, action.payload);
    
    }catch (error) {
        console.log(`Couldn't POST the children form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getChildren(action) {
    try{
        console.log('GET info for children', action);
        const getResponse = yield axios.get('/api/forms/children');
        const action = {type: 'SET_CHILDREN', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the children form information`);
        alert(`Sorry couldn't get the information from the children forms. Try again later.`)
    }
}

function* schoolSaga() {
    yield takeLatest('ADD_CHILDREN', postChildren);
    yield takeLatest('GET_CHILDREN', getChildren);
}

export default schoolSaga;
