import React from 'react'
import { Link } from 'react-router-dom'
const Branches = ({title}) => {
  return (
    <div>
        <div className='flex items-center p-2 hover:bg-gray-200 rounded-md'>
        <div className='w-4 h-4 rounded-md bg-violet-300 mr-3'>
        </div>
        <div><Link to={`/${title._id}/${title.branch_title}`}>{title.branch_title}</Link></div>
        </div>
    </div>
  )
}

export default Branches