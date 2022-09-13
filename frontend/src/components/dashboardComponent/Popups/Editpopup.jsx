import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import '../../../Styles/ComponentStyles/Editpopup.css'
import { updateEditState } from '../../../features/formState/formSlice'
import { updateTodo, update_particular_todo } from '../../../features/Todocrud/TodoSlice'
import { resety } from '../../../features/Todocrud/TodoSlice'
const Editpopup = () => {
    const dispatch = useDispatch();
    const { gettodo } = useSelector((state) => state.todos)
   const clear = () => {
    dispatch(updateEditState());
    dispatch(resety())
   }
   const [title, settitle] = useState("")
   const [description, setdescription] = useState("")
   const [status, setstatus] = useState("")

   // submit form 
   const send = (id) => {
    alert(id)
    const update = {
        title, description,
        status,id
    }
    if(!title || !description ||!status){
        alert('All fields must be filled')
    }else{
        dispatch(update_particular_todo(update))
        dispatch(updateEditState())
        dispatch(updateTodo({id, title, description, status}))
    }
   }



  return (
    <div className='todo-form'>
        <div className='todo-form2'>
            <div className='w-11/12 m-auto'>
       <div className='flex justify-between items-center'>
       <div className='font-bold text-xl text-violet-400 font-poppins'>
        Update Your Todo
        </div>
        <div>
        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => clear()} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-5 h-5">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        </div>
       </div>
       {gettodo && <div className='text-xs'>
            {gettodo.Todo_title} --Update
            </div>}
            <div className='flex justify-between items-center gap-8 my-4'>
                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Todo Title<small className='block'><span className='text-violet-600 text-xs'>Former Value:</span>{gettodo && gettodo.Todo_title}</small></label>
                <input type="text" value={title} onChange={(e) => settitle(e.target.value)} className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>
                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Todo Description<small className='block'><span className='text-violet-400 text-xs'>Former Value:</span>{gettodo && gettodo.Todo_description}</small></label>
                <input type="text" value={description} onChange={(e) => setdescription(e.target.value)}  className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>
            </div>
            <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Todo Title<small className='block'><span className='text-violet-400 text-xs'>Former Value:</span>{gettodo && gettodo.Todo_status}</small></label>
                <input type="text" value={status} onChange={(e) => setstatus(e.target.value)}  className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>
                <div className="mt-8 mb-10 p-3 bg-sky-100 rounded-lg border border-sky-800 ">
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores libero minima labore   </small>
                    </div>
                    <div className='flex justify-end'>
            <button onClick={() => send(gettodo._id)} className=' transition ease-in-out duration-100 p-2 bg-slate-800 text-white rounded-md w-32 focus:ring-2 border border-transparent focus:outline-none ring-offset-2 my-5 focus:ring-sky-600 focus:bg-opacity-95'>Update</button>
            </div>
       </div>
       </div>
    </div>
  )
}

export default Editpopup