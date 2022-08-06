import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
import forgotReducer from '../features/Auth/forgotSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    forgot:forgotReducer,
  },
});
