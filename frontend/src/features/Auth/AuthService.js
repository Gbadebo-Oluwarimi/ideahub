import axios from 'axios'

const API_URL = '/api/auth/'

const register = async(userdata) => {
    const response = await axios.post(API_URL, userdata)
    if(response.data){
        // console.log(response.data)
    }
    return response.data
}
// service to login backend
const Login = async(userdata) => {
    const response = await axios.post(API_URL + 'login', userdata)
    if(response.data){
        console.log(response.data)
    }
    return response.data
}
const ForgotPassword = async(userdata) => {
    const res = await axios.post(API_URL + 'forgot-password',userdata)
    return res.data
}

const authService = {
    register,
    Login,
    ForgotPassword,
}
export default authService