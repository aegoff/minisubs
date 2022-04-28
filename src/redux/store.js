import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import RootReducer from "./reducers/root";

export const store = configureStore({
  reducer: RootReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['form/initForm', 'form/changeValue', "form/setErrors", "form/validateForm"]
    }
  })
})