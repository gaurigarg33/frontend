import { createStore } from 'redux'
import { userFromReducer } from "./Day26Reduce";

const store = createStore(userFromReducer)

export default store