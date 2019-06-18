import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postCase(action) {
    try { 
        let post = yield axios.post(`/api/forms/case`, action.payload);
        const response = {type: 'SET_CASE', payload: post.data};
        yield put(response);
    } catch (error) {
        alert(`Sorry couldn't add the current submission. Try again later.`)
    }
  }

function* getCases(action) {
    try {
        let get = yield axios.get(`api/forms/all-cases`);
        const response = {type: 'SET_ALL_CASES', payload: get.data };
        yield put(response); 
    } catch (error) {
        alert(`Sorry couldn't get all cases. Try again later.`)
    }
}

function* getCaseId(action) {
    const payload = action.payload;
    try {
        const getResponse = yield axios.get(`/api/forms/all-cases/${payload}`);
        const action = {type: 'SET_CURRENT_ID', payload: getResponse.data};
        yield put(action);
    }catch (error) {
        alert(`Sorry couldn't get the current ID. Try again later.`)
    }
  }

  function* getCaseSearch(action) {
      try{
      const searchResponse = yield axios.get(`/api/forms/all-cases/search/?q=${action.payload.search}`);
      const setCases = {type: 'SET_ALL_CASES', payload: searchResponse.data};
      yield put(setCases);
    }
    catch (error) {
        alert(`There was an error when searching for cases. Please try again later.`)
    }
  }

  function* assignCase(action) {
    try { 
        yield axios.post(`/api/forms/assign`, action.payload);
    } catch (error) {
        alert(`Sorry couldn't assign the volunteer to a case. Try again later.`)
    }
  }

  function* getUserCases(parse) {
    const id = parse.payload;
    try {
        let get = yield axios.get(`api/forms/volunteer-cases/${id}`);
        const response = {type: 'SET_USER_CASES', payload: get.data };
        yield put(response); 
    } catch (error) {
        alert(`Sorry couldn't get all cases. Try again later.`)
    }
}

function* closeCase(action) {
    try {
        const getResponse = yield axios.put(`/api/forms/case/${action.payload.id}`, action.payload);
        yield put({ type: 'SET_CASE', payload: getResponse.data });
        yield put({ type: 'GET_CURRENT_ID', payload: action.payload.id });

    } catch (error) {
        alert(`Sorry couldn't edit the current entry. Try again later.`)
    }
  }

function* caseSaga() {
    yield takeLatest('ADD_CASE', postCase);
    /* volunteer landing page  */
    yield takeLatest('GET_CASES', getCases);
    yield takeLatest('GET_USER_CASES', getUserCases);
    yield takeLatest('GET_CURRENT_ID', getCaseId);
    yield takeLatest('GET_CASES_SEARCH', getCaseSearch)
    yield takeLatest('ASSIGN_CASE', assignCase)
    yield takeLatest('CLOSE_CASE', closeCase)
}

export default caseSaga;
