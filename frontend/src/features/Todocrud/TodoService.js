import axios from 'axios'

const API_URL='/api/details';

export const create_Todo = async(userdata) => {
  console.log(userdata);
    const response = await axios.post(`${API_URL}/todo_create`, userdata)
    // if(response) console.log(response.data);
    return response.data
}
export const gettodos = async(id) => {
  // console.log(id, 'stuff')
    const response = await axios.get(`${API_URL}/getalltodo/${id}`)
    // console.log(response.data)
    return response.data
}
export const get_Todo = async(userid) => {
  // console.log(userid);
  const response = await axios.post(`${API_URL}/todo/${userid}`)
  // console.log(response.data)
  return response.data
}

export const update_todo = async(userdata) => {
  console.log(userdata)
  const id = await userdata.id
  const response = await axios.post(`${API_URL}/todo-update/${id}`, userdata)
  return response.data
}

export const delete_todo = async(userid) => {
  console.log(userid)
  const response = await axios.post(`${API_URL}/todo-delete`, {Todo_id:userid})
  return response.data
}

const todocreate = {
  create_Todo,
  gettodos,
  get_Todo,
  update_todo,
  delete_todo
}
export default todocreate;