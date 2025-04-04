import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
const Contact = () => {
  const gitlink = "https://github.com/nivash77";
  const [popupData, setPopupData] = useState(null);
  const certificates = [
    {
      title: "Unstop - Java",
      images: [
        "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/java%20beginners_page-0001.jpg?updatedAt=1743781840588",
        "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/java%20intermediate_page-0001.jpg?updatedAt=1743781840718",
      ], 
    },
    {
      title: "Udemy - Python",
      images: ["https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/python_page-0001.jpg?updatedAt=1743781840722"],
    },
    {
      title: "Udemy - Linux & windows Commands",
      images: ["https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/windows%20command%20line%20basics_page-0001.jpg?updatedAt=1743781840652"],
    },
    {
      title: "Unstop - DBMS",
      images: ["https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/DBMS_page-0001.jpg?updatedAt=1743781840548"],
    },
  ];

  const togglePopup = (certificate) => {
    if (popupData && popupData.title === certificate.title) {
      setPopupData(null);
    } else {
      setPopupData(certificate);
    }
  };
  return (
    <>
      <div className="flex flex-col items-center h-auto sm:h-[100vh] gap-8 p-4">
        {/* Certificates Section */}
        <h1 className="z-30 text-lg sm:text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 sm:py-4 rounded">
          Certificates
        </h1>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {certificates.map((certificate, index) => (
            <div
              key={index}
              className="border border-gray-500 p-4 rounded-md cursor-pointer hover:bg-gray-700 hover:scale-105 transition-transform w-full sm:w-[45%] md:w-[30%] lg:w-[23%]"
              onClick={() => togglePopup(certificate)}
            >
              <h2 className="text-base sm:text-lg font-semibold text-white text-center">
                {certificate.title}
              </h2>
            </div>
          ))}
          {/* Popup */}
          {popupData && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={() => setPopupData(null)}
            >
              <div
                className="relative bg-white p-6 w-[90%] max-w-lg rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                  onClick={() => setPopupData(null)}
                >
                  ✕
                </button>
                <h2 className="font-bold text-lg text-gray-800 mb-4">
                  {popupData.title}
                </h2>
                <div className="flex flex-wrap gap-4">
                  {popupData.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${popupData.title} ${index + 1}`}
                      className="w-full h-auto object-cover rounded"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
  
        {/* Education Section */}
        <h1 className="z-30 text-lg sm:text-xl font-bold text-white bg-black bg-opacity-50 px-4 py-2 sm:py-4 rounded">
          Education
        </h1>
        <div className="text-white w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="border border-gray-500 p-4 rounded-md flex flex-col">
            <h2 className="text-sm sm:text-base font-semibold">
              B.E Computer Science and Engineering (Cyber Security)
            </h2>
            <p className="text-xs sm:text-sm">
              Sri Shakthi Institute of Engineering and Technology
            </p>
            <p className="text-xs sm:text-sm">2022-2026 || 8.36*</p>
          </div>
          <div className="border border-gray-500 p-4 rounded-md flex flex-col">
            <h2 className="text-sm sm:text-base font-semibold">
              Higher Secondary Certificate
            </h2>
            <p className="text-xs sm:text-sm">
              KCAD Chidhambaram Ganagiri Matriculation Hr Sec School
            </p>
            <p className="text-xs sm:text-sm">State Board || 2022 || 84.83%</p>
          </div>
          <div className="border border-gray-500 p-4 rounded-md flex flex-col">
            <h2 className="text-sm sm:text-base font-semibold">
              Secondary School Leaving Certificate
            </h2>
            <p className="text-xs sm:text-sm">
              KCAD Chidhambaram Ganagiri Matriculation Hr Sec School
            </p>
            <p className="text-xs sm:text-sm">State Board || 2020 || 63.6%</p>
          </div>
        </div>
  
        {/* Contact Buttons Section */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <button
            className="group flex justify-center p-4 rounded-md bg-[#0077b5] text-white font-semibold hover:bg-[#005a8d] hover:scale-110 transition-all duration-300 ease-in-out relative"
            onClick={()=>window.open("https://www.linkedin.com/in/nivash-m-2k4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app","_blank")}>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl group-hover:text-white"
            />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              LinkedIn
            </span>
          </button>
          <button
            className="group flex justify-center p-4 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-110 transition-all duration-300 ease-in-out relative"
            onClick={()=>window.location.href="mailto:nivashmareesh07@gmail.com"}>
            <IoMdMail className="text-3xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              Email
            </span>
          </button>
          <button
            className="group flex justify-center p-4 rounded-md bg-green-700 text-white font-semibold hover:bg-green-800 hover:scale-110 transition-all duration-300 ease-in-out relative"
            onClick={()=>window.location.href="tel:+8248464355"}>
            <FaPhone className="text-3xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              Phone
            </span>
          </button>
          <button
            className="group flex justify-center p-4 rounded-md bg-black text-white font-semibold hover:bg-gray-800 hover:scale-110 transition-all duration-300 ease-in-out relative"
          onClick={()=>window.open("https://github.com/nivash77","_blank")} >
            <FaGithub className="text-3xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              GitHub
            </span>
          </button>
        </div>
      </div>
    </>
  );
  
};

export { Contact };
