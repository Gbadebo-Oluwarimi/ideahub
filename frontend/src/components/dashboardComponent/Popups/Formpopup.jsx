
import '../../../Styles/ComponentStyles/Form.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createTodoBranch } from '../../../features/Todobranch/branchSlice'
import { reset } from '../../../features/Todobranch/branchSlice'
import { useNavigate } from 'react-router-dom'
import Error from '../../Error';
import { updateState } from '../../../features/formState/formSlice'
const Formpopup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { error, load, success } = useSelector((state) => state.branch)
    const { form } = useSelector((state) => state.formstate)
    const [branch_title, setBranchtitle] = useState('');
    const [branch_purpose, setBranchpurpose] = useState('');



    useEffect(() => {
        if(success){
            if(form){
                dispatch(updateState())
                dispatch(reset());
            }
        }
    }, [navigate,dispatch, success, form])
    //function to create the branch
    const createTheBranch = () => {
        const branch = {
            branch_title,
            branch_purpose
        }
        dispatch(createTodoBranch({branch_title, branch_purpose}));
        
    }

    const erase = () => {
        dispatch(reset());
        dispatch(updateState())
    }



    return (
        <div className='create'>
            <div className='create-todo font-poppins text-gray-800'><div className=' font-bold text-xl tracking-wide pt-5'><p className='leading-20'>Create a new Todo Branch 🍃  </p></div>
            <div className=' mt-1 w-35'>All Todo's must live under a project or <span className='text-sky-500'>Branch</span></div>
            <div className="pt-4">{error ? <Error msg={load}/> : null}</div>
            <div className='p-2 mt-5 flex gap-8'>
                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Branch Name<small className='block'>this branch will be invalid *</small></label>
                <input type="text" value={branch_title} onChange={(e) => setBranchtitle(e.target.value)} className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                </div>

                <div className='w-full'>
                <label className='block text-sm font-medium text-gray-700'>Branch Title<small className='block'>this branch will be invalid *</small></label>
                <input type="options" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                <small className='block pt-1 text-red-600'>Not required*</small>
                </div>
            </div>
            <div className='w-full p-2'>
                <label className='block text-sm font-medium text-gray-700'>Branch Purpose<small className='block'>this branch will be invalid *</small></label>
                <input type="text"  value={branch_purpose} onChange={(e) => setBranchpurpose(e.target.value)} className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                <small className='block pt-1'>this branch will be invalid *</small>
                </div>
                <div className='w-full p-2'>
                <label className='block text-sm font-medium text-gray-700'>Created At<small className='block'>this branch was created *</small></label>
                <input type="options" className='w-full outline-none ring-2 transition ease-in-out duration-300  mt-1 focus:ring-indigo-500 p-2 border-gray-300 border  rounded-md'/>
                <small className='block pt-1 text-red-600'>Not required*</small>
                </div>
                <div className='p-1 mt-2'> <div className='p-4 rounded-md bg-sky-100 flex border-sky-500 border-2 w-full mb-2 bg-opacity-40'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<small>This is valid Lorem i elit. Quibusdam soluta quia vitae dicta totam neque minima eum iur</small>
    </div></div>

            <div className='flex justify-end'>
            <button onClick={() => erase() } className=' mr-2 ml-1 transition ease-in-out duration-100 p-2 bg-slate-800 text-white rounded-md w-32 focus:ring-2 border border-transparent focus:outline-none ring-offset-2 my-5 focus:ring-sky-600 focus:bg-opacity-95'>Cancel</button>
            <button onClick={() => createTheBranch()} className='ml-1 transition ease-in-out duration-100 p-2 bg-green-800 text-white rounded-md w-32 focus:ring-2 border border-transparent focus:outline-none ring-offset-2 my-5 focus:ring-sky-600 focus:bg-opacity-95'>Create</button>
            </div>
            </div>
        </div>
    )
}
export default Formpopup