import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteBranch, delete_branch } from '../features/Todobranch/branchSlice';
import { useNavigate } from 'react-router-dom';
const Branches = ({title}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const funcdel = () => {
    dispatch(deleteBranch({id:title._id}))
    console.log('ran')
    dispatch(delete_branch(title._id));
    navigate('/Dashboard');
  }
  return (
    <div>
        <div className='flex items-center p-2 hover:bg-gray-200 rounded-md justify-between'>
          <div className='flex items-center'>
        <div className='w-4 h-4 rounded-md bg-violet-300 mr-3'>
        </div>
        <div><Link to={`/${title._id}/${title.branch_title}`}>{title.branch_title}</Link></div>
        </div>
        <div onClick={() => funcdel()}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-5 h-5 text-gray-500 p-0.5 hover:bg-gray-400 hover:text-gray-700 rounded-full cursor-pointer">
  <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
</svg>
</div>
        </div>
    </div>
  )
}

export default Branches