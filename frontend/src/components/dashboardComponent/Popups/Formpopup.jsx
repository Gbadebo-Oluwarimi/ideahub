import react from 'react'
import '../../../Styles/ComponentStyles/Form.css'

const Formpopup = ({func}) => {
    return (
        <div className='create'>
            <div className='create-todo font-poppins text-gray-800'><div className='font-bold text-xl tracking-wide'><p className='leading-10'>Create a new Todo 🌟 </p></div>
            <div className='w-96 mt-1'>All Todo's must live unser a project</div>
            <div className='p-2 mt-5 flex gap-8'>
                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Todo Branch</label>
                <input type="text" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>

                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Todo Title</label>
                <input type="options" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>
            </div>
            <button onClick={() => func() } className='ml-1 transition ease-in-out duration-100 p-2 bg-slate-800 text-white rounded-md w-32 focus:ring-2 border border-transparent focus:outline-none ring-offset-2 my-5 focus:ring-sky-600 focus:bg-opacity-95'>Cancel</button>
            </div>
        </div>
    )
}
export default Formpopup