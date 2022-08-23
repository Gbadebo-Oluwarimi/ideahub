import axios from 'axios'

const API_URL='/api/details';

export const getDetails = async() => {
    // console.log('ran')
    const response = await axios.get(`${API_URL}/user`)
    return response.data;
}


const Getuser = {
    getDetails,
}

export default Getuser