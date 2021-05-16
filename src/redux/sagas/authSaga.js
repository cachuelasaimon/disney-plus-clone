import { authActions } from "../types";
import { takeLatest, all, call, put } from "redux-saga/effects";
import {
  signInWithGoogle,
  handleProfile,
  auth,
  getCurrentUser,
} from "../../firebase/utils";
import { loginSuccess, logoutSuccess } from "../actions";

export function* getUserDatafromFirestoreDB(userAuth, additionalData) {
  try {
    const userRef = yield call(handleProfile, { userAuth, additionalData });
    const user = yield userRef.get();
    if (!user) {
      return;
    }
    yield put(
      loginSuccess({
        id: user.id,
        ...user.data(),
      })
    );
  } catch (err) {
    console.log("get user data error");
    console.log(err);
  }
}

/////////////// Login / Sign up ///////////////

export function* loginUser() {
  try {
    console.log("/authSaga/loginUser");
    const userAuth = yield signInWithGoogle();
    const { user } = userAuth;
    if (!user) {
      return;
    }
    yield getUserDatafromFirestoreDB(user, { photo: user.photoURL });
  } catch (err) {
    console.log(err);
  }
}
export function* onLoginStart() {
  yield takeLatest(authActions.LOGIN_START, loginUser);
}

/////////////// Logout  ///////////////
export function* logout() {
  try {
    console.log("authSaga/logout");
    yield auth.signOut();
    yield put(logoutSuccess());
  } catch (err) {
    console.log(err);
  }
}
export function* onLogoutStart() {
  yield takeLatest(authActions.LOGOUT_START, logout);
}

/////////////// Check if user is logged in  ///////////////
export function* isAuthenticated() {
  try {
    console.log("isAuthenticated");
    const user = yield getCurrentUser();
    if (!user) {
      return;
    }
    yield getUserDatafromFirestoreDB(user);
  } catch (err) {
    console.log("authSaga/isAuthenticated/error");
    console.log(err);
  }
}
export function* onCheckUserSession() {
  yield takeLatest(authActions.CHECK_USER_SESSION, isAuthenticated);
}

export default function* AuthSaga() {
  yield all([
    call(onLoginStart),
    call(onLogoutStart),
    call(onCheckUserSession),
  ]);
}
