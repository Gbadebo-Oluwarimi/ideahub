import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoState } from '../features/formState/formSlice';
import { checkBranch } from '../features/BranchDet/BranchDetSlice';
import Navbar from '../components/dashboardComponent/Navbar';
const Project = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const { load} = useSelector((state) => state.check_branch)
    useEffect(() => {
        dispatch(checkBranch({id}))
    }, [dispatch, id])
  return (
    <div className='flex flex-column h-screen font-poppins bg-white text-gray-700'>
    <Navbar/>
    <div className='flex-1 overflow-y-auto w-60 bg-white'>
      <div className='w-full bg-slate-50 border-b  p-3 mb-3' style={{height:'18rem'}}>
        <div className='pl-4 pt-2'>
          <div className='flex align-middle items-center justify-between'>
          <div className='flex align-middle w-90 items-center'>
              <div className='text-center font-bold text-2xl tracking-tight mr-4'><h1>{ load && load.branch_title }</h1></div>
              <div className=' border border-violet-300 border-blur    flex justify-between items-center align-middle bg-indigo-400 rounded-md bg-opacity-20 text-xs'><div className='w-40 inline-block p-3'><div>Project Stage</div><span className='font-bold text-sm'>Main Request</span></div>
              <div className='p-3'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" viewBox="0 0 20 20" fill="currentColor">
  <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
  <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
</svg></div>
              </div>
              
          </div>
          <div className='pr-10 flex'>
          <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 cursor-pointer h-6 w-6 p-1 bg-gray-200 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" className="cursor-pointer h-6 w-6 p-1 bg-gray-200 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" className=" ml-2 cursor-pointer h-6 w-6 p-1 bg-gray-200 rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
</svg>
          </div>
          </div>

          <div className='mt-8 flex w-max text-sm'>
            <div className='inline-block mr-10'>
              <div className='font-bold text-sm'>{load && load.branch_purpose}</div>
              <div className=''>User</div>
            </div>
            <div className='inline-block mr-10'>
              <div className='font-bold text-sm'>12th Jan 2020</div>
              <div className=''>Start Date</div>
            </div>

            <div className='inline-block mr-10'>
              <div className='font-bold text-sm'>0</div>
              <div className=''>Completed 🏹 </div>
            </div>

            <div className='inline-block mr-10'>
              <div className='font-bold text-sm'>10</div>
              <div className=''>Progress </div>
            </div>
            
          
          </div>

        <div className='mt-8 inline-block text-sm'>
              <div className="mb-2">assigners 🔐 </div>
              <div className='mt-3 flex items-center'>
                <span className='border-1 border-transparent ring-gray-700 ring-1  rounded-full h-8 w-8 bg-gray-400 text-center text-xs p-2 mr-2'>04</span>
                <div>You</div>
              </div>
        </div>
</div>
       </div>
       <div className='mx-4'>
        <div className='m-auto max-w-screen rounded-t-lg bg-gray-200 w-full py-3 px-3 flex justify-end'><button
        className='p-2 bg-violet-500 rounded-md text-white w-32 border border-gray-200 focus:ring-2 ring-violet-500'
         onClick={() => dispatch(updateTodoState())}>Create Todo</button></div>
        <table className="mx-3 text-left text-sm divide-y divide-gray-200 mr-4">
  <thead className=' p-3 rounded-sm w-full divide-y divide-gray-200'>

    <tr className='rounded-sm p-3 w-full '>
      <th className='py-7 w-1/4'>Task</th>
      <th className=' scale-10 sm:w-1/5 px-2'>Progress</th>
      <th className='w-56'>Task</th>
      <th className='w-56'>Status</th>
      <th className='w-56'>Budget</th>
      <th>Deadline</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody className='divide-y divide-gray-200'>
    <tr className=''>
      <td className="inline-block my-2">
        <div className='font-bold'>The Sliding Mr. Bones (Next Stop, Pottersville)</div>
        <div className='text-xs'>Aproject designed to make life better</div>
        </td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
      <td> <div className='p-1 rounded-full w-24 text-center bg-yellow-100 text-yellow-600'>Pending</div></td>
      <td>Stuff</td>
      <td>Stuff</td>
    </tr>
    <tr>
    <td className='inline-block my-2'>
      <div className="font-bold">Malcolm Lockyer</div>
      <div className='text-xs'>A little drift</div>
      </td>
      <td>The Eagles</td>
      <td>1972</td>
      <td> <div className='p-1 rounded-full w-24 text-center bg-yellow-100 text-yellow-600'>Pending</div></td>
      <td>Stuff</td>
      <td>Stuff</td>
    </tr>
    <tr>
    <td className='inline-block my-2'>
      <div className="font-bold">Malcolm Lockyer</div>
      <div className='text-sm'>A little drift</div>
      </td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
      <td> <div className='p-1 rounded-full w-24 text-center bg-yellow-100 text-yellow-600'>Pending</div></td>
      <td>Stuff</td>
      <td>Stuff</td>
    </tr>
    <tr>
    <td className='inline-block my-2'>
      <div className="font-bold">Malcolm Lockyer</div>
      <div className='text-sm'>A little drift</div>
      </td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
      <td> <div className='text-xs p-1 rounded-full w-24 text-center bg-green-100 text-green-600'>Completed</div></td>
      <td>Stuff</td>
      <td>Stuff</td>
    </tr>
    <tr>
    <td className='inline-block my-2'>
      <div className="font-bold">Malcolm Lockyer</div>
      <div className='text-sm'>A little drift</div>
      </td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
      <td> <div className='p-1 rounded-full w-24 text-center bg-yellow-100 text-yellow-600'>Pending</div></td>
      <td>Stuff</td>
      <td>Stuff</td>
    </tr>
  </tbody>
</table>
</div>

      
    </div>
    </div>
       
  )
}

export default Project