import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Resetpassword } from '../../features/Auth/forgotSlice';
import Error from '../../components/Error';

const ResetPassword = () => {
    const dispatch = useDispatch()
    const { id, token } = useParams()
    const [password, setPassword] = useState("")
    const [conPass, setConPass] = useState("")
    

    const HandleSubmit = () =>{
        if(password !== conPass){
            return (<Error msg={"The two Password fields do not match"}/>)
        }
        const data = {
            id, token,
            password, conPass
        }
        dispatch(Resetpassword(data))
    }
  return (
    <div>ResetPassword

        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <input type="text" value={conPass} onChange={(e) => setConPass(e.target.value)}/>
        <button onClick={() => HandleSubmit()}>Submit</button>
    </div>
  )
}

export default ResetPassword