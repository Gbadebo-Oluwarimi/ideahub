import React, { useState, useEffect } from 'react'
import '../Styles/ComponentStyles/forgotPopup.css'
import { useDispatch, useSelector } from 'react-redux'
import { ForgotPassword } from '../features/Auth/forgotSlice'
import Success from './Success'
import Error from './Error'
const ForgotPopup = ({ShowPopup}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("")
  const { isError, isSuccess,msg } = useSelector((state) => state.forgot)

  // useEffect(() => {
  //   console.log('okay')
  // }, [isError, isSuccess]);
  const HandleSubmit = () => {
    if(!email){
      return <Error msg="The email field is not filled"/>
    }
    dispatch(ForgotPassword(email))
  }



  return (
    <>
    <div className='back'>
      <div className='ml-4 mr-4'>
    <div className='popup'>
      <div className='cancel'><svg xmlns="http://www.w3.org/2000/svg" onClick={() => ShowPopup()} className="h-5 w-5 p-1 text-white hover:rounded-full hover:bg-slate-300" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
</svg></div>
      <div className='mb-4 font-bold'>Forgot Password 🔑 </div>
      <div className='mb-10'>
        <label className='font-bold p-0 m-0'>Email</label>
        <legend className='mb-2'><small>Enter a valid Email Address</small></legend>
        <input type="email" value={email}  onChange={(e) => setEmail(e.target.value)} className='input'/>
        <small>Must include all the symbols</small>
      </div> 
      {isSuccess && <Success msg={msg}/>}
      {isError && <Error msg ={msg}/>}
      <div className='submit'>
      <button className='button' onClick={() => HandleSubmit()}>Send</button> 
      </div>         
    </div>
    </div>
    </div>
    </>
    
  )
}

export default ForgotPopup