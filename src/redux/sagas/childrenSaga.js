import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postChildren(action) {

    try {
        console.log('CHILDREN POST PAYLOAD', action.payload);
        
        yield axios.post(`/api/forms/children`, action.payload);
    
    }catch (error) {
        console.log(`Couldn't POST the children form`);
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

  function* getChildren(parse) {
    console.log('family bio info payload', parse.payload);
    const case_id = parse.payload;
    try{
        console.log('GET info for children', case_id);
        const getResponse = yield axios.get(`/api/forms/children/${case_id}`);
        const action = {type: 'SET_CHILDREN', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the children form information`);
        alert(`Sorry couldn't get the information from the children forms. Try again later.`)
    }
}

function* editChildren (action) {
    console.log('PUT for editing children form', action.payload);
    try {
        const getResponse = yield axios.put(`/api/forms/edit-children/${action.payload.case_id}`, action.payload);
        yield put({ type: 'SET_CHILDREN', payload: getResponse.data });
    } catch (error) {
        console.log(`Couldn't PUT the current user`);
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* schoolSaga() {
    yield takeLatest('ADD_CHILDREN', postChildren);
    yield takeLatest('GET_CHILDREN', getChildren);
    yield takeLatest('PUT_CHILDREN', editChildren);
}

export default schoolSaga;
