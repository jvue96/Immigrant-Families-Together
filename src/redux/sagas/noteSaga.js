import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addNote(action) {
    try {
        console.log('POST new note', action);
        yield axios.post(`/api/forms/note`, action.payload);
    }catch (error) {
        console.log(`Couldn't POST the note`);
        alert(`Sorry couldn't add the new note. Try again later.`)
    }
  }

function* getNote(parse) {
    console.log('GET newly added note', parse.payload);
    const note_id = parse.payload;
    try{
        console.log('GET info for EVENT INFO', note_id);
        const getResponse = yield axios.get(`/api/forms/note/${note_id}`);
        const action = {type: 'SET_NOTE', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the newly created not`);
        alert(`Sorry couldn't get the newly created note. Try again later.`)
    }
}




function* noteSaga() {
    yield takeLatest(`ADD_NOTE`, addNote)
    yield takeLatest(`GET_NOTE`, getNote)
}


export default noteSaga;