import todoReducer from "./todos/reducer";
import filtersReducer from "./filters/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filtersReducer,
});

export default rootReducer;
