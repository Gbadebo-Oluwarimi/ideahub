import React from 'react'
import { useState } from 'react'
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
import Formpopup from '../components/dashboardComponent/Popups/Formpopup'

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
    const [formpop, setformpop] = useState(false);

    const changeformState = () => {
      console.log('ran')
      setformpop(!formpop)
    }
    return (
      <>
      {/* New Dashoard Navbar  */}
      <div className='flex flex-column h-screen font-poppins'>
      {formpop && <Formpopup func={changeformState}/>}
      <Navbar load={load}/>
      <div className='flex-1 overflow-y-auto w-60 bg-gray-200'>
        <Firstview popup={changeformState}/>
      </div>
      </div>
      </>
    )
  }
  export default Dashboard