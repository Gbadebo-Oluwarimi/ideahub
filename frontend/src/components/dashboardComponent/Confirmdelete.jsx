import React from 'react'
import '../../Styles/dahsboardStyles/Confirmdelete.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, delete_particular_todo } from '../../features/Todocrud/TodoSlice';
import { canceldelete } from '../../features/formState/formSlice';
const Confirmdelete = () => {
  const {tododelete} = useSelector((state) => state.formstate)
  const dispatch = useDispatch()
  const wipeout = (id) => {
    console.log(id)
    dispatch(deleteTodo({id}))
    dispatch(delete_particular_todo(id))
  }
  return (
    <div className="glassmorph fixed w-100vh h-screen bg-red">
      <svg xmlns="http://www.w3.org/2000/svg" onClick={() => dispatch(canceldelete())} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

        <div className='m-auto max-w-lg rounded-md bg-white p-2 text-center'>
            Any Action performed like deleting ,editing {tododelete.title}<span className='text-red-700'>cannot</span> be reversed
            <div className='bg-red-600 rounded-md p-3 w-40 text-center' onClick={() => wipeout(tododelete.id)}>Delete</div>
            hjvj
        </div>
    </div>
  )
}

export default Confirmdelete