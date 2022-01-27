import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import { pokemonApi } from "./services/pokemon";

export type RootState = ReturnType<typeof rootReducer>;
const store = configureStore({
  reducer: rootReducer,
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type AppDispatch = typeof store.dispatch;

export default store;
