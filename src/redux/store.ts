import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
});

export const store = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMidleware) =>
      getDefaultMidleware().concat(postsApi.middleware),
  });
};
