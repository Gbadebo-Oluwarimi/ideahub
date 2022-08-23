import axios from 'axios'

const API_URL='/api/details';

//
export const check_branch = async(userdata) => {
    const response = await axios.get(`${API_URL}/${userdata.id}`);
    if(response){
        // console.log(response);
    }
    return response.data
}

const branchDet = {
    check_branch
}
export default branchDet;