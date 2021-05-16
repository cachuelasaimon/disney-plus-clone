import { all, call } from "redux-saga/effects";
import authSaga from "./authSaga";

export default function* Sagas() {
  yield all([call(authSaga)]);
}
