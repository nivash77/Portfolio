import { useEffect, useState } from "react";
import { Img } from "../components/Images";
import { MySkills } from "../components/MySkills";
import { Contact } from "./Contact";

const Profile = () => {
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
          <div className="flex justify-center items-center z-10 mb-6">
          {/* <img
            src="src/assets/img/WhatsApp Image 2024-12-02 at 3.37.00 PM.jpeg"
            className="w-[9rem] h-[10rem] object-cover  border-4 rounded-full"
            alt="User"
          /> */}
        </div>
      <div className="relative z-10 w-[80%] min-h-fit flex justify-center gap-[5rem] h-[80vh] pt-7" >
    <Img />
  </div>

        {/* Skills Section */}
        <div
          className="w-full flex flex-row flex-wrap gap-8 justify-center items-center p-8"
          id="Skills"
        >
          <MySkills />
        </div>

       
   {/* <div className="w-full h-full flex flex-row flex-wrap gap-8 justify-center items-center pb-8" id="Projects" >
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
      </div> */}

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
