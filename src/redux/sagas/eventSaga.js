import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addEvent(action) {
    try {
        console.log('POST new event', action);
        yield axios.post(`/api/forms/event`, action.payload);
    }catch (error) {
        console.log(`Couldn't POST the event`);
        alert(`Sorry couldn't add the new event. Try again later.`)
    }
  }

function* getEvent(action) {
    try{
        console.log('GET newly added event', action);
        const getResponse = yield axios.get('/api/forms/event');
        const action = {type: 'SET_EVENT', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        console.log(`Couldn't get the newly created event`);
        alert(`Sorry couldn't get the newly created event. Try again later.`)
    }
}



function* eventSaga() {
    yield takeLatest(`ADD_EVENT`, addEvent)
    yield takeLatest(`GET_EVENT`, getEvent)
}


export default eventSaga;