import React from 'react'
import '../../Styles/dahsboardStyles/Firstview.css'
const Firstview = ({popup}) => {
  return (
    <div className='main'>
      <div className='main2'>
        <div className='content'>
         <div className='font-bold text-xl text-gray-600 text-font-jost -mt-6 mb-2'>Welcome to <span className='text-indigo-500'>Ideahub</span></div>
          <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit.tenetur provident ab fugit aliq</p>
        </div>
        <div className='flex gap-4 my-8'>
    <div onClick={() => popup()} className='hover:cursor-pointer  transition ease-in-out duration-700  flex bg-gray-400 border-2 border-gray-600 rounded-md w-full p-2 bg-opacity-5 hover:bg-opacity-30'>
        <div className=''> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
        <small><h1 className='mb-1'>Create A todo</h1><p>This funtiion Helps you to organize all your todo's in one area</p></small>
    </div>

    <div className='transition ease-in-out duration-700 flex bg-gray-400 border-2 border-gray-600 rounded-md w-full p-2 bg-opacity-5 hover:bg-opacity-30'>
        <div className=''> <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
<small><h1 className='mb-1'>Create An Idea</h1><p>This funtiion Helps you to organize all your todo's in one area</p></small>
    </div>
        </div>
        <div className='m-auto text-center max-w-md'><small>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error dolores laudantium exceptur</small></div>
      </div>
    </div>
  )
}

export default Firstview
