import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index35";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;