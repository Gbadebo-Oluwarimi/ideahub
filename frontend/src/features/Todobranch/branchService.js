import axios from 'axios'

const API_URL='/api/details';

//create todo branch 
export const createBranch = async(userdata) => {
    const response = await axios.post(`${API_URL}/create-todo-branch`, userdata);
    if(response){
        // console.log(response);
    }
    return response.data
}

export const getDetails = async() => {
    const response = await axios.get(`${API_URL}`)
    return response.data;
}


const branch = {
    createBranch,
    getDetails
}
export default branch;