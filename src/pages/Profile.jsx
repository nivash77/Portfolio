import { useEffect, useState } from "react";
import { Img } from "../components/Images";
import { MySkills } from "../components/MySkills";
import { Contact } from "./Contact";
import { Myproject } from "../components/Myproject";
import { getProject } from "../services/api";
import { Addprojectcomponents } from "../components/Addprojectcomponents";

const Profile = () => {
  const [projectdata, setProjectdata] = useState([]);
  const [admin_user, setvisible] = useState(localStorage.getItem("admin"));

  // const fetchprojects = async () => {
  //   try {
  //     const { data } = await getProject();
  //     setProjectdata(data);
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchprojects();
  // }, []);

  // if (!projectdata || projectdata.length === 0) {
  //   return (
  //     <>
  //       <div className="w-full h-[10%] flex justify-center items-center">
  //         {admin_user === "nivash_07" && <Addprojectcomponents />}
  //       </div>
  //     </>
  //   );
  // }

  return (
    <>
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
        <div className="absolute left-40 top-4 mb-4 ml-2 sm:left-32 ">
          <img
            src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/WhatsApp%20Image%202025-01-14%20at%2017.34.58_aa4ca64d.jpg?updatedAt=1743781556438"
            alt="Corner Image"
            className="w-20 sm:w-20 md:w-40  max-w-full h-auto object-contain rounded-md"
          />
        </div>

        {/* Main Content */}
        <div className="relative z-10 w-[90%] md:w-[80%] flex flex-col md:flex-row justify-center gap-8 md:gap-16 h-auto pt-24 md:pt-36">
          <Img />
        </div>

        {/* Skills Section */}
        <div
          className="w-full flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center items-center px-4 py-8"
          id="Skills"
        >
          <MySkills />
         
        </div>

        {/* Projects Section */}
        <h1 className="text-3xl font-bold mb-10 text-white text-center relative">
          <span className="text-amber-400">Projects</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
        </h1> 
        <div
          className="w-full flex flex-col md:flex-row flex-wrap gap-4 md:gap-8 justify-center items-center pb-8 px-4"
          id="Projects"
        >
          {/* {admin_user === "nivash_07" && (
            <div className="w-full h-[10%] flex justify-center items-center">
              <Addprojectcomponents fetchprojects={fetchprojects} />
            </div>
          )}
          {projectdata?.map((data, index) => ( */}
            <Myproject
            />
          {/* ))} */}
        </div>

        {/* Contact Section */}
        <div
          className="w-full flex flex-col items-center justify-center gap-8 py-8  bg-opacity-50"
          id="Contact"
        >
          <Contact />
        </div>
      </div>
    </>
  );
};

export { Profile };