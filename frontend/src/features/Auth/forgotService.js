import axios from 'axios'

const API_URL = '/api/auth/'

const forgotPassword = async(userdata) => {
    const res = await axios.post(API_URL + 'forgot-password',userdata)
    return res.data
}

const forgotService = {
    forgotPassword,
}

export default forgotService
