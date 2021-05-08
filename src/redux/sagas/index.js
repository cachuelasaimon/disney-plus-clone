import { all, call } from "redux-saga/effects";
import authSaga from "./authSaga";
import movieSaga from "./movieSaga";

export default function* rootSagas() {
  yield all([call(authSaga), call(movieSaga)]);
}
