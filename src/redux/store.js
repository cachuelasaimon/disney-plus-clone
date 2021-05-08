import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import Reducers from "./reducers";
import Saga from "./sagas";
import thunk from "redux-thunk";

/// Initial State ///
const initialState = {};

/// Middleware ///
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware, thunk];

/// Create store ///
const store = createStore(
  Reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
sagaMiddleware.run(Saga);

export default store;
