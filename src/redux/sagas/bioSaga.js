import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addBioSaga(action) {
try {
yield axios.post(`/api/forms/bio`, action.payload);
}
catch(error) {
alert(`there was an error posting the aid form, please try again later`)
}
}

function* getBioSaga(kitty) {
    const taco = kitty.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/bio/${taco}`);
        const action = {type: 'SET_BIO', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the bio forms. Try again later.`)
    }
}

function* editBio(action) {
    try {
        const getResponse = yield axios.put(`/api/forms/edit-bio/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_BIO', payload: getResponse.data });
    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }



function* bioSaga() {
    yield takeLatest(`ADD_BIO`, addBioSaga)
    yield takeLatest(`GET_BIO_INFO`, getBioSaga)
    yield takeLatest(`PUT_BIO`, editBio)
}


export default bioSaga;