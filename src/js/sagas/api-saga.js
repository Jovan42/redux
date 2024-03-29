import { takeEvery, call, put } from "redux-saga/effects";
import {
  DATA_REQUEST,
  DATA_LOADED,
  API_ERROR
} from "../constants/action-types";

export default function* watcherSaga() {
  yield takeEvery(DATA_REQUEST, workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: DATA_LOADED, payload });
  } catch (e) {
    yield put({ type: API_ERROR, payload: e });
  }
}

function getData() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(response =>
    response.json()
  );
}
