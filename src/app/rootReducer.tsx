import { combineReducers } from "@reduxjs/toolkit";
import { todosReducer } from "./todos/reducer";
import { pokemonApi } from "./services/pokemon";

const rootReducer = combineReducers({
  todos: todosReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

export default rootReducer;
