import {
    put,
    takeEvery,
    all,
    fork
  } from "redux-saga/effects";
  import {
    CHANGE_ROUTER,
    SHOW_LOADING,
    HIDE_LOADING,
    SHOW_LOADING_ASYNC,
    HIDE_LOADING_ASYNC
  } from "../actionTypes";
  
  let count = 0;
  function* showLoading() {
    count++;
    yield put({ type: SHOW_LOADING });
  }
  
  function* hideLoading() {
    count--;
    if (count === 0) {
      yield put({ type: HIDE_LOADING });
    }
  }
  
  function* watchShowLoadingAsync() {
    yield takeEvery(SHOW_LOADING_ASYNC, showLoading);
  }
  
  function* watchHideLoadingAsync() {
    yield takeEvery(HIDE_LOADING_ASYNC, hideLoading);
  }
  function* changeRouter() {
      console.log('saga')
    yield put({type:CHANGE_ROUTER})
  }
  function* mySaga() {
    yield fork(changeRouter)
    yield all([watchShowLoadingAsync(), watchHideLoadingAsync()]);
  }
  
  export default mySaga
  