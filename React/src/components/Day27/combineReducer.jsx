import todoReducer from "./Reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({

    todo:todoReducer,
})

export default rootReducer;