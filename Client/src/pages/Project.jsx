import { useEffect, useState } from "react"

import {Myproject} from "../components/Myproject";
import { getProject } from "../services/api"
import {Addprojectcomponents} from "../components/Addprojectcomponents"

const Project = () => {
  const [projectdata, setProjectdata] = useState(null)
  const[admin_user,setvisible]=useState(localStorage.getItem('admin'))
  const fetchprojects = async () => {
    // const {}
    try {
      const { data } = await getProject()
      setProjectdata(data)
    } catch (error) {
      console.warn(error);

    }
  }
  console.log(projectdata)
  useEffect(() => {
    fetchprojects()
  }, [])
  if (!projectdata || projectdata.length===0) 
    {
    return (
    <>
    <div className="w-full h-[10%] flex justify-center items-center">
      {
        admin_user==='nivash_07' &&(

          <Addprojectcomponents/>
        )
      }
        </div>
    </>
    )
    
  }
  return (
    <>
    
      <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center pb-8">
        {
          admin_user==='nivash_07' &&(
          <div className="w-full h-[10%] flex justify-center items-center">

          <Addprojectcomponents  fetchprojects={fetchprojects}/>
          </div>
         
        )
      }

        {
          projectdata.map((data, index) => (
            <Myproject title={data.title} desc={data.desc} key={index} pid={index} cover={data.cover} id={data.id} fetchprojects={fetchprojects} />
          ))
        }
      </div>
    </>
  )
}

export  {Project}