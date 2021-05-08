import { authActions, movieActions } from "../types";
import { auth } from "../../firebase/utils";

/// Auth ///
export const signUpStart = () => ({
  type: authActions.SIGN_UP_START,
});

export const signUpSuccess = (user) => ({
  type: authActions.SIGN_UP_SUCCESS,
  payload: user,
});

export const logout = () => async (dispatch) => {
  await auth.signOut();
  checkUserSession();
  dispatch({
    type: authActions.LOGOUT,
  });
};

export const checkUserSession = () => ({
  type: authActions.CHECK_USER_SESSION,
});

/// Movies ///
export const fetchMoviesStart = () => ({
  type: movieActions.FETCH_MOVIES_START,
});

export const fetchMoviesSuccess = (movies) => ({
  type: movieActions.FETCH_MOVIES_SUCCESS,
  payload: movies,
});
