import { createAction } from "@reduxjs/toolkit";

export const addTodo = createAction<{ text: string }>("ADD_TODO");
export const removeTodo = createAction<{ index: number }>("REMOVE_TODO");
export const toggleTodo = createAction<{ index: number }>("TOGGLE_TODO");
