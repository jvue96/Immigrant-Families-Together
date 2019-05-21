import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addBioSaga(action) {
console.log(`inside addBioSaga, here is action:`, action);
try {
yield axios.post(`/api/forms/bio`, action.payload);
}
catch(error) {
alert(`there was an error posting the aid form, please try again later`)
console.log(`error posting to DB:`, error);
}
}

function* getBioSaga(action) {
    try{
        console.log('GET info from bio form', action);
        const getResponse = yield axios.get('/api/forms/bio');
        const action = {type: 'SET_BIO', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the bio form information`);
        alert(`Sorry couldn't get the information from the bio forms. Try again later.`)
    }
}



function* bioSaga() {
    yield takeLatest(`ADD_BIO`, addBioSaga)
    yield takeLatest(`GET_BIO_INFO`, getBioSaga)
}


export default bioSaga;