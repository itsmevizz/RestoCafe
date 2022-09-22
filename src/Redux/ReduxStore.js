import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Features/CounterSlice";

const store = configureStore({
  reducer: {
    value: counterReducer,
  },
});

export default store;
