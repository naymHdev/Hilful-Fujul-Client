import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../Redux/features/counter/counterSlice";
import logger from "./middlewares/logger";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
