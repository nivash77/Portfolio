
import axios from 'axios'

//  const API = import.meta.env.VITE_API
//   const API = "http://localhsot:7777"
const API="https://66e527625cc7f9b6273c701a.mockapi.io"

// const getProject=()=>axios.get(`${API}/projects/all`);
// const addProject=(projectdata)=>axios.post(`${API}/projects/add`,projectdata);
// const deleteProject=(id)=>axios.delete(`${API}/projects/delete/${id}`);
// export{getProject,deleteProject,addProject}; 

const getProject=()=>axios.get(`${API}/Project`);
const addProject=(projectdata)=>axios.post(`${API}/Project`,projectdata);
const deleteProject=(id)=>axios.delete(`${API}/Project/${id}`);
export{getProject,deleteProject,addProject}; 