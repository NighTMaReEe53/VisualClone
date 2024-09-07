import { configureStore } from "@reduxjs/toolkit";
import TreeFileSlice from "./Slice";

const store = configureStore({
  reducer: {
    Tree: TreeFileSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;