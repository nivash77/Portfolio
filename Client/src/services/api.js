
import axios from 'axios'

const API = import.meta.env.VITE_API
// const API = "http://localhsot:7777"

const getProject=()=>axios.get(`${API}/projects/all`);
const addProject=(projectdata)=>axios.post(`${API}/projects/add`,projectdata);
const deleteProject=(id)=>axios.delete(`${API}/projects/delete/${id}`);
export{getProject,deleteProject,addProject}; 