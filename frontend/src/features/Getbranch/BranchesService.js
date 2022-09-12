import axios from 'axios'

const API_URL='/api/details';

export const getbranches = async() => {
    const response = await axios.get(`${API_URL}/branch`)
    // if(response) console.log(response.data);
    return response.data
}


const branches = {
  getbranches
}
export default branches;