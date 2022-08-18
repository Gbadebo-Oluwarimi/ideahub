import React from 'react'
import '../Styles/Login.css'
import { useDispatch, useSelector} from 'react-redux'
import{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { LoginUser } from '../features/Auth/authSlice'
import { reset } from '../features/Auth/forgotSlice'
import { useNavigate } from 'react-router-dom'
import ForgotPopup from '../components/ForgotPopup'
import Svg from '../components/Svg'
import Success from '../components/Success'
import Error from '../components/Error'


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [forgot, setForgot] = useState(false)
  const { registereduser, isError, msg, loading } = useSelector((state) => state.auth)

  const ShowPopup = () => {
    setForgot(!forgot);
    // dispatch(reset())
  }

    const HandleSubmit = () => {
      const userdata ={ 
        email, password
      }
      dispatch(LoginUser(userdata));
      
    }
  return (
    <>
    
        <div className='Login'>
          <Svg/>
        {forgot ? <ForgotPopup ShowPopup={ShowPopup}/> : null}
          <div className='ml-3 mr-3'>
                <div className='form'>
                  <div className='absolute bg-slate-600 rounded-full w-12 h-12 -top-5'></div>
                  <div className='mt-10 mb-11 text-xl font-poppins font-medium'><h1>Welcome, Please Login</h1></div>
                  {isError ? <Error msg={msg}/> : null}
                  {registereduser ? <Success msg={`${registereduser} account has been created. Login 😎`}/> : null}
                    <div className='mb-10'>
                    <label className='font-bold p-0 m-0'>Email</label>
                    <legend className='mb-2'><small>Enter a valid Email Address</small></legend>
                    <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)} className='input'/>
                    <small>Must include all the symbols</small>
                    </div>
                  
                    <div className='mb-2'>
                    <label className='font-bold p-0 m-0'>Password</label>
                    <legend className='mb-2'><small>Enter a Password</small></legend>
                    <input type="text" value={password}  onChange={(e) => setPassword(e.target.value)} className='input'/>
                    </div>
                    <div className='mb-10'><small>Don't have an account <Link to="/signup">SignUp</Link></small></div>
                    <div className="mt-8 mb-10 p-5 bg-slate-300 rounded-md">
                            <small>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores libero minima labore nulla Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora quas veniam maiores exercitationem inventore eveniet sapiente quisquam cum,  </small>
                    </div>
                    <div className='forgot'><small>Forgot Password <b onClick={() => ShowPopup()}><div className='cursor-pointer'>Click Here to Recover</div></b></small></div>
                    <div className='submit'>
                    <button onClick={() => HandleSubmit()}>{loading ? 'Logging In....': 'Login'}</button>
                    </div>
                  </div>
                  </div>
           
        </div>
    </>
  )
}

export default Login