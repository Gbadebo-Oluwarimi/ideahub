import React from 'react'

const Navbar = ({load}) => {
  return (
    <div className='flex-2 navbar scrollbar'>
    <div className="top-nav">
            <div className='left'>
              <div className='icon'><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
<path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
</svg></div>
              <div className='text'><div className='font-bold'>Ideahub</div><div>Create a todo</div></div>
            </div>
            <div className='right'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg></div>
</div>


<div className='search'>
           <div className='flex'>
           <div><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.08}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
</svg></div><input type="text" className='text-input' placeholder='Search..'/>
          </div>
         <div><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 bg-gray-200 p-1 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
<path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
</svg></div>
</div>


<div>
         <div className='noti-1'>  
       <div className='flex'>
         <div className=''>
     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.7}>
     <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
     </svg>
         </div>
         <div className='font-bold text-gray-800'>
    Groups
         </div>
         </div>
       <div>
       <svg xmlns="http://www.w3.org/2000/svg" className="rounded-md h-6 w-6 bg-gray-400 p-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
</svg>
       </div>
         </div>
       {/* end of this secitio  */}

         {/* another section would require component template whrn doing clean up*/}
         <div className='noti-1'>                                              
       <div className='flex'>
         <div className=''>
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
</svg>
         </div>
         <div className='font-bold text-gray-800'>
     Activity
         </div>
         </div>
       <div>
       <svg xmlns="http://www.w3.org/2000/svg" className="rounded-md h-6 w-6 bg-gray-400 p-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
</svg>
       </div>
         </div>

<div className='noti-1'>
<div className='flex'>
<div className=''>
   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.9}>
<path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
</svg>
   </div>
   <div className='font-bold text-gray-800'>
Schedule
  </div>
   </div>
 <div>
 <svg xmlns="http://www.w3.org/2000/svg" className="rounded-md h-6 w-6 bg-gray-400 p-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
 </div>
   </div>

</div>




<div class="bg-gradient-to-r from-transparent via-gray-300 w-full h-0.5 my-5"></div>

<div className='flex justify-between items-center text-gray-500 px-2'> 
    <div>Shared</div>
   <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 hover:bg-gray-200 p-0.5 hover:rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
 <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg></div>
</div>



<div className='flex items-center p-2 text-gray-500  hover:rounded-lg hover:bg-gray-200'>
  <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
</svg></div>
  <div>Files</div>
</div>

<div className='flex items-center p-2 text-gray-500 hover:rounded-lg hover:bg-gray-200'>
  <div><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
</svg></div>
  <div>Boosts</div>
</div>







<div className='p-2 text-gray-500 '>
Projects
</div>
<div className='flex items-center p-2 hover:bg-gray-200 rounded-md'>
<div className='w-4 h-4 rounded-md bg-violet-300 mr-3'>
</div>
<div>Developing IdeaHub</div>
</div>

<div className='flex items-center p-2 hover:bg-gray-200 rounded-md'>
<div className='w-4 h-4 rounded-md bg-green-600 mr-3'>
</div>
<div>Mikrotik</div>
</div>


<div className='flex items-center p-2 hover:bg-gray-200 rounded-md'>
<div className='w-4 h-4 rounded-md bg-pink-600 mr-3'>
</div>
<div>Stuff</div>
</div>

<div className='flex items-center p-1 mb-3 hover:bg-gray-200 rounded-md'>
<div className=''>
<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
<path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
<div>Add a New Idea</div>
</div>


<div className='bot mt-28'>
<div className="flex justify-between text-sm items-center p-2 rounded-lg bg-gray-200 mb-1">
            <div className='left'>
              <div className='icon'></div>
              <div className='text'><div className='font-bold'>{load && load.username}</div><div className='text-xs w-full overflow-hidden'>{load && load.email}</div></div>
            </div>
            <div className='right'><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
<path fillRule="evenodd" d="M4.293 15.707a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414 0zm0-6a1 1 0 010-1.414l5-5a1 1 0 011.414 0l5 5a1 1 0 01-1.414 1.414L10 5.414 5.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
</svg></div>
        </div>
</div>
    </div>

  )
}

export default Navbar
