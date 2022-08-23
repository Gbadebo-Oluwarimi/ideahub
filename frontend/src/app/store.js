import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/Auth/authSlice'
import forgotReducer from '../features/Auth/forgotSlice'
import dashboardReducer from '../features/Dashboard/dashBoardSlice'
import branchReducer from '../features/Todobranch/branchSlice'
import UserReducer from '../features/getUser/getUserSlice'
import CheckReducer from '../features/BranchDet/BranchDetSlice'
import formReducer from '../features/formState/formSlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    forgot:forgotReducer,
    dashboard:dashboardReducer,
    branch:branchReducer,
    Userinfo:UserReducer,
    check_branch:CheckReducer,
    formstate:formReducer,
  },
});
