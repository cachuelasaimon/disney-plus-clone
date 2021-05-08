import { movieActions } from "../types";

const initial_state = {
  recommeds: [],
  newDisney: [],
  originals: [],
  trending: [],
  allMovies: [],
};

export default function movieReducers(state = initial_state, action) {
  switch (action.type) {
    case movieActions.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
