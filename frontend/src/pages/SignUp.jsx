import React from 'react'
import '../Styles/SignUp.css'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { registerUser } from '../features/Auth/authSlice'
import { useState } from 'react'
import Svg from '../components/Svg'
const SignUp = () => {
  const dispatch = useDispatch();
  

  const [username, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPasssword] = useState("")
  const [Password2, setPasssword2] = useState("")

  const HandleSubmit =() => {
      const userdata ={ 
        email, username, password
      }
      dispatch(registerUser(userdata))
    
  }
  return (
    <>
   
        <div className='SignUp'>
        <Svg/>
          <div className='ml-3 mr-3'>
                <div className='form'>
                <div className='absolute bg-slate-600 rounded-full w-12 h-12 -top-5'></div>
                  <div className='mt-10 mb-11 text-xl font-poppins font-medium'><h1>Hey, Please SignIn</h1></div>
                  <div className='mb-10'>
                    <label className='font-bold p-0 m-0'>Username</label>
                    <legend className='mb-2'><small>Enter Your Username</small></legend>
                    <input type="text" onChange={(e) => setUser(e.target.value)} value={username} className='input'/>
                    <small>Can't be empty</small>
                    </div>

                    <div className='mb-10'>
                    <label className='font-bold p-0 m-0'>Email</label>
                    <legend className='mb-2'><small>Enter a valid Email Address</small></legend>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} className='input'/>
                    <small>Must include all the symbols</small>
                    </div>

                    <div className='mb-2'>
                    <label className='font-bold p-0 m-0'>Password</label>
                    <legend className='mb-2'><small>Enter a Password</small></legend>
                    <input type="text" onChange={(e) => setPasssword(e.target.value)} value={password}  className='input'/>
                    </div>

                    <div className='mb-2'>
                    <label className='font-bold p-0 m-0'> Confirm Password</label>
                    <legend className='mb-2'><small>Confirm Your Password</small></legend>
                    <input type="text" onChange={(e) => setPasssword2(e.target.value)} value={Password2}  className='input'/>
                    </div>
                    <div className='mb-10 font-bold'><small>Already have an account <Link to="/">Login</Link></small></div>
                    <div className="mt-8 mb-10 p-5 bg-slate-300 rounded-md">
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores libero minima labore nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quas veniam maiores exercitationem inventore eveniet sapiente quisquam cum,  </small>
                    </div>
                    <div className='submit'>
                    <button onClick={() => HandleSubmit()}>SignUp</button>
                    </div>
                  </div>
                  </div>
           
        </div>
    </>
  )
}

export default SignUp