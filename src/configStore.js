import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)));


export default store;