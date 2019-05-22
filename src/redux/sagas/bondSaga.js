import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addBond(action) {
    try {
        console.log('POST new bond and legal info', action);
        yield axios.post(`/api/forms/bond`, action.payload);
    }catch (error) {
        console.log(`Couldn't POST the bond and legal info`);
        alert(`Sorry couldn't add the new bond and legal info. Try again later.`)
    }
  }

function* getBond(action) {
    try{
        console.log('GET newly added bond and legal info', action);
        const getResponse = yield axios.get('/api/forms/bond');
        const action = {type: 'SET_BOND', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the newly created bond and legal info`);
        alert(`Sorry couldn't get the newly created bond and legal info. Try again later.`)
    }
}



function* bondSaga() {
    yield takeLatest(`ADD_BOND`, addBond)
    yield takeLatest(`GET_BOND`, getBond)
}


export default bondSaga;