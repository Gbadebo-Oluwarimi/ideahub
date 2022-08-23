import React from 'react'
import { useState } from 'react'
import '../Styles/dahsboardStyles/dashboard.css'
import { getAuthUserDashboard } from '../features/Dashboard/dashBoardSlice'
// import { useNavigate } from 'react-router-dom'
// import { Logoutuser } from '../features/Auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
// import { reset } from '../features/Dashboard/dashBoardSlice'
// import Spinners from '../components/dashboardComponent/Spinners'
import Navbar from '../components/dashboardComponent/Navbar'
import Firstview from '../components/dashboardComponent/Firstview'
import Formpopup from '../components/dashboardComponent/Popups/Formpopup'
import { getAuthUserInfo } from '../features/getUser/getUserSlice'
const Dashboard = () => {
  const dispatch =useDispatch();
  // const navigate = useNavigate();
  // const { load, Error } = useSelector((state) => state.dashboard)
  const {form} = useSelector((state) => state.formstate)
  // const { User } = useSelector((state) => state.Userinfo)

  useEffect(() =>{
    dispatch(getAuthUserInfo());

    // return () => {
    //   dispatch(reset())
    // }
  }, [dispatch])

    // const HandleLogout = () => {
    //   dispatch(Logoutuser())
    //   navigate('/')
    // }
    return (
      <>
      {/* New Dashoard Navbar  */}
      <div className='flex flex-column h-screen font-poppins'>
      <Navbar/>
      <div className='flex-1 overflow-y-auto w-60 bg-gray-200'>
        <Firstview/>
      </div>
      </div>
      </>
    )
  }
  export default Dashboard