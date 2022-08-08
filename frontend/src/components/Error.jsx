import React from 'react'

const Error = ({msg}) => {
  return (
    <div className='p-4 rounded-md bg-red-300 flex border-red-600 border-4 w-full opcaity-0.4'>
       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<div>{msg}</div>
    </div>
  )
}

export default Error