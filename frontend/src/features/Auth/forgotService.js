import axios from 'axios'

const URL = '/api/auth/'

const forgotPassword = async(userdata) => {
    console.log(userdata)
    const res = await axios.post(URL + 'forgot-password',userdata)
   if(res.data){
    console.log(res.data)
   }
    return res.data
}

const resetPassword = async(userdata) => {
    const response = await axios.post(`${URL}reset-password/${userdata.id}/${userdata.token}`);
    if(response.data){
        console.log(response.data)
    }
    return response.data;
}
const forgotService = {
    forgotPassword,
    resetPassword,
}

export default forgotService
