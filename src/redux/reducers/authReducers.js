import { authActions } from "../types";

const initial_state = {
  user: null,
};

export default function userReducer(state = initial_state, action) {
  switch (action.type) {
    case authActions.SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };

    case authActions.LOGOUT:
      return {
        ...state,
        user: null,
      };

    default:
      return state;
  }
}
