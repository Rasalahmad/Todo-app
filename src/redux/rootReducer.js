import todoReducer from "./todos/reducer";
import filtersReducer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todo: todoReducer,
  filter: filtersReducer,
});

export default rootReducer;
