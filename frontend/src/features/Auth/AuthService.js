import axios from 'axios'
axios.defaults.withCredentials = true;
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
        // console.log(response.data)
    }
    return response.data
}

const Logout = async() => {
    const response = await axios.post(API_URL + 'logout')
    if(response.data){
        console.log(response.data)
    }
    return response.data
}

const authService = {
    register,
    Login,
    Logout,
}
export default authService