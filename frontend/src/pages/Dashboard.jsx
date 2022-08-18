import React from 'react'
import '../Styles/dahsboardStyles/dashboard.css'
import { getAuthUserDashboard } from '../features/Dashboard/dashBoardSlice'
import { useNavigate } from 'react-router-dom'
import { Logoutuser } from '../features/Auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { reset } from '../features/Dashboard/dashBoardSlice'
import Spinners from '../components/dashboardComponent/Spinners'
import Navbar from '../components/dashboardComponent/Navbar'
import Firstview from '../components/dashboardComponent/Firstview'

const Dashboard = () => {
  const dispatch =useDispatch();
  const navigate = useNavigate();
  const { load, loading, Error } = useSelector((state) => state.dashboard)

  useEffect(() =>{
    dispatch(getAuthUserDashboard());
  
    console.log(Error)
    // return () => {
    //   dispatch(reset())
    // }
  }, [dispatch, Error])

    const HandleLogout = () => {
      dispatch(Logoutuser())
      navigate('/')
    }
    return (
      <>
      {/* New Dashoard Navbar  */}
      <div className='flex flex-column h-screen'>
      <Navbar load={load}/>
      <div className='flex-1 overflow-y-auto p-5 w-60'>
        <Firstview/>
      </div>
      </div>
      </>
    )
  }
  export default Dashboard