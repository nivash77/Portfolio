import { useEffect, useState } from "react";
import { Img } from "../components/Images";
import { MySkills } from "../components/MySkills";
import { Contact } from "./Contact";
import {Myproject} from "../components/Myproject";
import { getProject } from "../services/api"
import {Addprojectcomponents} from "../components/Addprojectcomponents"

const Profile = () => {


  const [projectdata, setProjectdata] = useState([])
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
      {/* Wrapper for Video Background */}
      <div className="relative w-full min-h-screen bg-no-repeat bg-cover bg-center flex flex-col items-center gap-10 overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="https://cdn.pixabay.com/video/2024/05/05/210824_large.mp4"
          autoPlay
          loop
          muted
        ></video>

        {/* Profile Image */}
        <div className="absolute left-3 top-16 mb-4 ml-4">
    <img
      src="src\assets\img\WhatsApp Image 2025-01-14 at 17.34.58_aa4ca64d.jpg"
      alt="Corner Image"
      className="w-[10rem] object-contain rounded-md"
    />
  </div>

  <div className="relative z-10 w-[80%] min-h-fit flex justify-center gap-[5rem] h-[80vh] pt-7">
    <Img />
  </div>

        {/* Skills Section */}
        <div
          className="w-full flex flex-row flex-wrap gap-8 justify-center items-center p-8"
          id="Skills"
        >
          <MySkills />
          <h1 className="z-30 text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-5 rounded ">
  Projects
</h1>
        </div>

       
   <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center pb-8" id="Projects" >
  
        {
          admin_user==='nivash_07' &&(
          <div className="w-full h-[10%] flex justify-center items-center">

          <Addprojectcomponents  fetchprojects={fetchprojects}/>
          </div>
         
        )
      }

        {
          projectdata?.map((data, index) => (
            <Myproject title={data.title} desc={data.desc} key={index} pid={index} kid={index + 1} cover={data.cover} git={data.git} id={data._id||data.id} link={data.link} fetchprojects={fetchprojects} />
          ))
        }
      </div>

        {/* Contact Section */}
        <div
          className="w-full flex flex-row flex-wrap gap-8 justify-center items-center pb-8"
          id="Contact"
        >
          <footer>
            <Contact />
          </footer>
        </div>
      </div>
    </>
  );
};

export { Profile };
