import { combineReducers } from "redux";
import counterReducer from "../component/TestComponent/handle/redux/test";

export const rootReducer = combineReducers({
  counterReducer,
});
