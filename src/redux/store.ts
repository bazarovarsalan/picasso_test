import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./postsApi";

export const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) =>
    getDefaultMiddleWare().concat(postsApi.middleware),
});
