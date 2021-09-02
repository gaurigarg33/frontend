import countReducer from "./countReducer34";
import { combineReducers } from "redux";
import notesReducer from "./notesReducer34";

const rootReducer = combineReducers({
  counter: countReducer,
  notes: notesReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;

export default rootReducer;