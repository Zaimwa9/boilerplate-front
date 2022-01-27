import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./actions";

/*
 * Immutable is natively implemented in createdReducer, correcting mutations of the state
 * Still try to not mutate it...
 */
export const todosReducer = createReducer([] as any, (builder) => {
  builder
    .addCase(actions.addTodo, (state, action: any) => {
      state.push(action.payload);
    })
    .addCase(actions.toggleTodo, (state, action: any) => {
      const todo = state[action.payload.index];
      // "mutate" the object by overwriting a field
      todo.completed = !todo.completed;
    })
    .addCase(actions.removeTodo, (state, action: any) => {
      return state.filter((todo: any, i: any) => i !== action.payload.index);
    });
});
