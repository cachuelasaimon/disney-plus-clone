import { combineReducers } from "redux";
import user from "./authReducers";
import movies from "./movieReducers";

export default combineReducers({
  /// Reducers ///
  user,
  movies,
});
