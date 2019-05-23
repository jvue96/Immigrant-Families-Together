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
    console.log('LEGAL ICE FACILITY INFO payload', parse.payload);
    const case_id = parse.payload;
    try{
        console.log('GET info for LEGAL ICE FACILITY', case_id);
        const getResponse = yield axios.get(`/api/forms/bond/${case_id}`);
        const action = {type: 'SET_BOND', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the legal form information`);
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



function* bondSaga() {
    yield takeLatest(`ADD_BOND`, addBond)
    yield takeLatest(`GET_BOND`, getBond)
}


export default bondSaga;