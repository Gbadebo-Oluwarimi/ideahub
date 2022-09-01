import axios from 'axios'

const API_URL='/api/details';

export const getbranches = async() => {
    const response = axios.get(`${API_URL}/branches`)
    if(response) console.log(response);
}


const branches = {
  getbranches
}
export default branches;