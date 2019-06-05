import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addBond(action) {
    try {
        yield axios.post(`/api/forms/bond`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the new bond and legal info. Try again later.`)
    }
  }

// function* getBond(parse) {
//     console.log('legal ice facility info payload', parse.payload);
//     const case_id = parse.payload;
//     try{
//         console.log('GET newly added bond and legal info', case_id);
//         const getResponse = yield axios.get(`/api/forms/bond/${case_id}`);
//         const action = {type: 'SET_BOND', payload: getResponse.data};
//         yield put(action);
//     }catch (error) {
//         console.log(`Couldn't get the newly created bond and legal info`);
//         alert(`Sorry couldn't get the newly created bond and legal info. Try again later.`)
//     }
// }

function* getBond(parse) {
    const case_id = parse.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/bond/${case_id}`);
        const action = {type: 'SET_BOND', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the information from the legal forms. Try again later.`)
    }
}

// function* getBond(payload) {
//     try{
//         console.log('GET newly added bond and legal info');
//         const getResponse = yield axios.get(`/api/forms/bond`);
//         const action = {type: 'SET_BOND', payload: getResponse.data};
//         yield put(action);
//     }catch (error) {
//         console.log(`Couldn't get the newly created bond and legal info`);
//         alert(`Sorry couldn't get the newly created bond and legal info. Try again later.`)
//     }
// }

function* editBond(action) {
    try {
        const getResponse = yield axios.put(`/api/forms/edit-bond/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_BOND', payload: getResponse.data });
    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
}



function* bondSaga() {
    yield takeLatest(`ADD_BOND`, addBond)
    yield takeLatest(`GET_BOND`, getBond)
    yield takeLatest(`PUT_BOND`, editBond)
}


export default bondSaga;