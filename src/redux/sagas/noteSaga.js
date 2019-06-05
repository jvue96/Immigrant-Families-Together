import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNote(action) {
    try {
        yield axios.post(`/api/forms/note`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the new note. Try again later.`)
    }
  }

function* getNote(parse) {
    const note_id = parse.payload;
    try{
        const getResponse = yield axios.get(`/api/forms/note/${note_id}`);
        const action = {type: 'SET_NOTE', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the newly created note. Try again later.`)
    }
}




function* noteSaga() {
    yield takeLatest(`ADD_NOTE`, addNote)
    yield takeLatest(`GET_NOTE`, getNote)
}


export default noteSaga;