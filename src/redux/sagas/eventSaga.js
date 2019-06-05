import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addEvent(action) {
    try {
        yield axios.post(`/api/forms/event`, action.payload);
    }catch (error) {
        alert(`Sorry couldn't add the new event. Try again later.`)
    }
  }


function* getAllEvents(action) {
    try {
        let result = yield axios.get(`/api/forms/events`)
        const eventsAction = {type: 'SET_ALL_EVENTS', payload: result.data};
        yield put(eventsAction);
    }
    catch(error) {
        alert(`Error getting all events!`)
    }
}


function* getSearchEvents(action) {
    try {
        const searchResponse = yield axios.get(`/api/forms/events/search/?q=${action.payload.search}`);
      const setCases = {type: 'SET_ALL_EVENTS', payload: searchResponse.data};
      yield put(setCases)
    }
    catch(error) {
        alert(`Error searching event!`)
    }
}



// function* getEvent(action) {
//     try{
//         console.log('GET newly added event', action);
//         const getResponse = yield axios.get('/api/forms/event');
//         const action = {type: 'SET_EVENT', payload: getResponse.data};
//         yield put(action);
//     }catch (error) {
//         console.log(`Couldn't get the newly created event`);
//         alert(`Sorry couldn't get the newly created event. Try again later.`)
//     }
// }

function* getEvent(parse) {
    const event_id = parse.payload;
    try {
        const getResponse = yield axios.get(`/api/forms/event/${event_id}`);
        const action = {type: 'SET_EVENT', payload: getResponse.data};
        yield put(action);
    } catch (error) {
        alert(`Sorry couldn't get the information from the event. Try again later.`)
    }
}



function* eventSaga() {
    yield takeLatest(`ADD_EVENT`, addEvent)
    yield takeLatest(`GET_EVENT`, getEvent)
    yield takeLatest(`GET_ALL_EVENTS`, getAllEvents)
    yield takeLatest(`GET_SEARCH_EVENTS`, getSearchEvents)
}


export default eventSaga;