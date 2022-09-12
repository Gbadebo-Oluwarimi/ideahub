import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoState } from '../features/formState/formSlice';
import { checkBranch } from '../features/BranchDet/BranchDetSlice';
import { createtodos, get_all_todos } from '../features/Todocrud/TodoSlice';
import Todopopup from '../components/dashboardComponent/Popups/Todopopup';
import Navbar from '../components/dashboardComponent/Navbar';
const Project = () => {
    const { id } = useParams();
    const {todo} = useSelector((state) => state.formstate)
    const { todos } = useSelector((state) => state.todos)
    const sendy = (Todo_title, Todo_description) => {
      // console.log(id)
          dispatch(createtodos({Todo_description, Todo_title, Todo_branch_id:id}))
    }
    const dispatch = useDispatch()
    const { load} = useSelector((state) => state.check_branch)
    useEffect(() => {
      dispatch(get_all_todos(id))
        dispatch(checkBranch({id}))
    }, [id])
  return (
    <>
     {todo && <Todopopup func={sendy}/>}
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
       <div className='mx-5'>
        <div className='m-auto max-w-screen rounded-t-lg bg-gray-50 w-full py-1 px-3 flex justify-end'><button
        className='p-2 bg-violet-500 rounded-md text-white w-32 border border-gray-200 focus:ring-2 ring-violet-500'
         onClick={() => dispatch(updateTodoState())}>Create Todo</button></div>
        <table className="mx-3 text-left text-sm divide-y divide-gray-200 mr-4">
  <thead className=' p-3 rounded-sm w-full divide-y divide-gray-200'>

    <tr className='rounded-sm p-2 w-full '>
      <th className='py-3 w-1/4'>Task 🏹 </th>
      <th className=' scale-10 sm:w-1/5 px-2'>Progress 📊 </th>
      <th className='w-56'>Task 📝  </th>
      <th className='w-56'>Status </th>
      <th className='w-56'>Deadline ⏲ </th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody className='divide-y divide-gray-200'>
   {todos.length > 0 ? todos.map((todo) => (<tr key={todo._id}>
    <td className='inline-block my-1 '>
      <div className='font-bold'>{todo.Todo_title}</div>
      <div className='text-xs'>{todo.Todo_description}</div>
    </td>
    <td>The Eagles</td>
    <td>1972</td>
    <td> <div className='p-1 rounded-full w-24 text-xs text-center bg-yellow-100 text-yellow-600'>{todo.Todo_status}</div></td>
    <td>Stuffs</td>
    <td className='w-24 items-center text-center'>
      <div className='flex justify-between items-center text-center'>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6 text-sky-700 cursor-pointer bg-gray-100 rounded-full p-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6 text-sky-700 cursor-pointer bg-gray-100 rounded-full p-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
</svg>
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-6 h-6 text-red-400 cursor-pointer bg-gray-100 rounded-full p-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</div>
    </td>
   </tr>)) : (<div className="font-2xl text-center m-auto max-w-3xl">No Todo Created Create One</div>)}
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
   
  
    
  </tbody>
</table>
</div>

      
    </div>
    </div>
       </>
  )
}

export default Project