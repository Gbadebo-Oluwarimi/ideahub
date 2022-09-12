import React from 'react'
import '../../../Styles/ComponentStyles/Todopopup.css'
import { useDispatch} from 'react-redux'
import { useState } from 'react'
import { updateTodoState } from '../../../features/formState/formSlice'
import { resety } from '../../../features/Getbranch/BranchesSlice'
const Todopopup = ({func}) => {
    const dispatch = useDispatch()
    const [ Todo_title, setTodo_title ] = useState("")
    const [ Todo_description, setTodo_description ] = useState("")
    const resetState = () => {
        dispatch(updateTodoState());
        dispatch(resety())
    }
    const send = () => {
        func(Todo_title, Todo_description)
        dispatch(updateTodoState());
    }

  return (
    <div className='main w-full fixed z-50 min-h-screen items-center'>
        <div className='main-2 relative m-auto mt-5 rounded-md pt-7 px-7 max-w-xl overflow-y-auto'>
            <div className='flex justify-between align-middle items-center'>
            <div className='font-bold text-lg font-poppins inline-block'>Create your <span className='text-violet-500'>Todo's 🏹 </span><div className='text-xs font-medium '>Title Of Todo</div></div>
            <div onClick={() => resetState()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
        </div>
        <div className='p-2 inline-block w-full'>
            <div className='block w-full'>
                <div className='font-semibold my-2 text-sm'>Todo Title</div>
                <input className='w-full outline-none ring-2 transition ease-in-out duration-300 text-sm mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md' type="text" placeholder='Enter s Todo title.....' value={Todo_title} onChange={(e) => setTodo_title(e.target.value)}/>
                <span className='text-xs '>Create a valid todo title *</span>
            </div>
            <div className='block w-full'>
                <div className='font-semibold mt-2 mb-2 text-sm'>Todo Description</div>
                <textarea className='w-full outline-none ring-2 transition ease-in-out duration-300 text-sm mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md h-36' type="message" placeholder='Enter s Todo description.....' value={Todo_description} onChange={(e) => setTodo_description(e.target.value)}/>
                <span className='text-xs'>Create a valid todo Description *</span>
            </div>
            {/* <div className='block w-full'>
                <div className='font-semibold my-2'>Todo Branch</div>
                <select  className='w-full outline-none ring-2 transition ease-in-out duration-300 text-sm mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md' type="text" placeholder='Enter s Todo title.....' value={Todo_branch_title} onChange={(e) => setTodo_branch_title(e.target.value)}>
                    { todobranches ? todobranches.map((branchi) => (
                        <option key={branchi._id} value={branchi.branch_title}>{branchi.branch_title}</option>
                    )) : null}
                </select>
                <span className='text-xs '>Select Where you want this todo to live *</span>
            </div> */}
        </div>

        <div className='flex w-full'>
            <button  className='w-full ml-1 transition ease-in-out duration-100 p-2 bg-green-800 text-white rounded-md focus:ring-2 border border-transparent focus:outline-none ring-offset-2 my-5 focus:ring-sky-600 focus:bg-opacity-95' onClick={() => send() }>Create</button>
            </div>
        </div>
    </div>
  )
}

export default Todopopup
