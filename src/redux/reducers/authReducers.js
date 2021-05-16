import { authActions } from "../types";

const initial_state = {
  currentUser: null,
};

export default function AuthReducer(state = initial_state, action) {
  switch (action.type) {
    case authActions.LOGIN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    case authActions.LOGOUT_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
}
