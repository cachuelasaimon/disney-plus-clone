import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducers from "./reducers";
import Sagas from "./sagas";

const initial_state = {};

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
  Reducers,
  initial_state,
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(Sagas);

export default store;
