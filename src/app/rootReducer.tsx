import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/reducer";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export default rootReducer;
