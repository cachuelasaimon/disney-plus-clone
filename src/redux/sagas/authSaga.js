import { authActions } from "../types";
import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  getCurrentUser,
  handleProfile,
  signInWithGoogle,
} from "../../firebase/utils";
import { signUpSuccess } from "../actions";

/// Helper Functions ///

export function* getUserDataFromFirestoreDB(userAuth, additionalData) {
  try {
    console.log("/get-UD");
    const userRef = yield call(handleProfile, { userAuth, additionalData });
    const user = yield userRef.get();
    yield put(
      signUpSuccess({
        id: user.id,
        ...user.data(),
      })
    );
  } catch (err) {
    console.log(err);
  }
}

///////////////////////////////////////////////////////
export function* isAuthenticated() {
  try {
    console.log("/check-user-session");
    const user = yield getCurrentUser();
    if (user) yield getUserDataFromFirestoreDB(user);
  } catch (err) {
    console.log(err);
  }
}
export function* onCheckUserSession() {
  yield takeLatest(authActions.CHECK_USER_SESSION, isAuthenticated);
}
///////////////////////////////////////////////////////
export function* signUp() {
  try {
    console.log("/sign-up-user-start");

    const authUser = yield signInWithGoogle();
    const { user } = authUser;
    console.log(user.photoURL);
    // console.log(user);
    if (!user) return;
    yield getUserDataFromFirestoreDB(user);
  } catch (err) {
    console.log(err);
    throw err;
  }
}
export function* onSignUpStart() {
  yield takeLatest(authActions.SIGN_UP_START, signUp);
}

export default function* AuthSaga() {
  yield all([call(onSignUpStart), call(onCheckUserSession)]);
}
