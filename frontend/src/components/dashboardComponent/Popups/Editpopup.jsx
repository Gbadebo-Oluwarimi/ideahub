import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../../../Styles/ComponentStyles/Editpopup.css'
const Editpopup = () => {
    const dispatch = useDispatch();
    const { gettodo } = useSelector((state) => state.todos)
   
  return (
    <div className='todo-form'>
        {gettodo && <div>
            {gettodo.Todo_title}
            </div>}
    </div>
  )
}

export default Editpopup