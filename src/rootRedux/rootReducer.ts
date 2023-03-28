import { combineReducers } from "redux";
import counterReducer from "../component/TestComponent/handle/redux/testSlice";

export const rootReducer = combineReducers({
  counterReducer,
});
