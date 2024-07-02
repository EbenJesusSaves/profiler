import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./slice/postSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      posts: postSlice,
      // comments: commentsReducer,
      // users: usersReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
