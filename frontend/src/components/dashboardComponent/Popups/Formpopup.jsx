import react from 'react'
import '../../../Styles/ComponentStyles/Form.css'

const Formpopup = ({func}) => {
    return (
        <div className='create'>
            <div className='create-todo font-poppins text-gray-800'><div className=' font-bold text-xl tracking-wide pt-5'><p className='leading-20'>Create a new Todo Branch 🍃  </p></div>
            <div className=' mt-1 w-35'>All Todo's must live unser a project</div>
            <div className='p-2 mt-5 flex gap-8'>
                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Branch Name<small className='block'>this branch will be invalid *</small></label>
                <input type="text" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>

                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Branch Title<small className='block'>this branch will be invalid *</small></label>
                <input type="options" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>
            </div>
            <div className='w-full p-2'>
                <label className='block text-sm font-medium text-gray-700'>Branch Title<small className='block'>this branch will be invalid *</small></label>
                <input type="options" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                <small className='block pt-1'>this branch will be invalid *</small>
                </div>
                <div className='w-full p-2'>
                <label className='block text-sm font-medium text-gray-700'>Created At<small className='block'>this branch was created *</small></label>
                <input type="options" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                <small className='block pt-1'>Some dummy text *</small>
                </div>
                <div className='p-1 mt-2'> <div className='p-4 rounded-md bg-sky-100 flex border-sky-500 border-2 w-full mb-2 bg-opacity-40'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<small>This is valid Lorem i elit. Quibusdam soluta quia vitae dicta totam neque minima eum iur</small>
    </div></div>

            <div className='flex justify-end'>
            <button onClick={() => func() } className=' mr-2 ml-1 transition ease-in-out duration-100 p-2 bg-slate-800 text-white rounded-md w-32 focus:ring-2 border border-transparent focus:outline-none ring-offset-2 my-5 focus:ring-sky-600 focus:bg-opacity-95'>Cancel</button>
            <button className='ml-1 transition ease-in-out duration-100 p-2 bg-indigo-800 text-white rounded-md w-32 focus:ring-2 border border-transparent focus:outline-none ring-offset-2 my-5 focus:ring-sky-600 focus:bg-opacity-95'>Create</button>
            </div>
            </div>
        </div>
    )
}
export default Formpopup