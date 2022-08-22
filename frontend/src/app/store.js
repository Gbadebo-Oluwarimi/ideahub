import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
import forgotReducer from '../features/Auth/forgotSlice'
import dashboardReducer from '../features/Dashboard/dashBoardSlice'
import branchReducer from '../features/Todobranch/branchSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    forgot:forgotReducer,
    dashboard:dashboardReducer,
    branch:branchReducer
  },
});
