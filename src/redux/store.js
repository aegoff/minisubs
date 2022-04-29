import { configureStore } from '@reduxjs/toolkit';
import RootReducer from "./reducers/root";

export const store = configureStore({
  reducer: RootReducer,
})