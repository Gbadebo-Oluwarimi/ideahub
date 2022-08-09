import axios from 'axios'

const API_URL='/api/details';

export const getDetails = async() => {
    const response = await axios.get(`${API_URL}`)
    if(response){
        console.log(response.data)
    }
    return response.data;
}

const dashboard = {
    getDetails,
}

export default dashboard