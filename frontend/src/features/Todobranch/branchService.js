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

const branch = {
    createBranch
}
export default branch;