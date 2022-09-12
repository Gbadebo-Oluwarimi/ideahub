import axios from 'axios'

const API_URL='/api/details';

export const create_Todo = async(userdata) => {
  console.log(userdata);
    const response = await axios.post(`${API_URL}/todo_create`, userdata)
    // if(response) console.log(response.data);
    return response.data
}
export const gettodos = async(id) => {
  console.log(id, 'stuff')
    const response = await axios.get(`${API_URL}/getalltodo/${id}`)
    // console.log(response.data)
    return response.data
}

const todocreate = {
  create_Todo,
  gettodos
}
export default todocreate;