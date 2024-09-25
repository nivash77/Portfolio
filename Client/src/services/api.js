
import axios from 'axios'

const API = "https://66e527625cc7f9b6273c701a.mockapi.io"

const getProject=()=>axios.get(`${API}/Project`);
const addProject=(projectdata)=>axios.post(`${API}/Project`,projectdata);
const deleteProject=(id)=>axios.delete(`${API}/Project/${id}`);
export{getProject,deleteProject,addProject};