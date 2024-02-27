import axios from 'axios'

const MY_SERVER = "http://127.0.0.1:8000";
export function addTask(formData) {
    return axios.post(MY_SERVER + "/upload_image/", formData)
}

export function fetchTasks(formData){
    return axios.get(MY_SERVER +'/get_all_images/' , formData)
}

export const deleteTask = async (id) => {
    const response = await axios.delete(`${MY_SERVER}/delete_image/${id}/`);
    
    return response.data;
};

  
  export const updateTask = async (id, data) => {
    const response = await axios.put(`update_image${id}/`, data);
    return response.data;
};