import productsReducer from "./productsReducer";
import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

export type reducerType = ReturnType<typeof rootReducer>;

export default rootReducer;