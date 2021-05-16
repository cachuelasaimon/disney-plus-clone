import { authActions } from "../types";

export const loginStart = () => ({
  type: authActions.LOGIN_START,
});

export const loginSuccess = (payload) => ({
  type: authActions.LOGIN_SUCCESS,
  payload,
});

export const logoutStart = () => ({
  type: authActions.LOGOUT_START,
});

export const logoutSuccess = () => ({
  type: authActions.LOGOUT_SUCCESS,
  payload: null,
});

export const checkUserSession = () => ({
  type: authActions.CHECK_USER_SESSION,
});
