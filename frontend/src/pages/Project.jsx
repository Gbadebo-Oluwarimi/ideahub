import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { checkBranch } from '../features/BranchDet/BranchDetSlice';
import Navbar from '../components/dashboardComponent/Navbar';
const Project = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { load, loading } = useSelector((state) => state.check_branch)
    useEffect(() => {
        dispatch(checkBranch({id}))
    }, [dispatch, id])
  return (
    <div className='flex flex-column h-screen font-poppins bg-white'>
    <Navbar/>
    <div className='flex-1 overflow-y-auto w-60 bg-white'>
      <div className='w-full h-80 bg-slate-50 border-b-2 border-b-gray-400 p-4'>
        <div className='p-5'>
          <div className='flex text-center'>
              <div className='font-bold text-3xl'><h1>{ load && load.branch_title }</h1></div>
              <div></div>
          </div>
        </div>
      </div>
    </div>
    </div>
       
  )
}

export default Project