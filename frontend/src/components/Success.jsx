import React from 'react'

const Success = ({msg}) => {
  return (
    <div className='p-4 rounded-xl bg-green-100 flex border-green-500 border-2 w-full mb-2'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<div>{msg}</div>
    </div>
  )
}

export default Success