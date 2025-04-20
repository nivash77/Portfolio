import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Contact = () => {
  const gitlink = "https://github.com/nivash77";
  const [popupData, setPopupData] = useState(null);
  const certificates = [
    {
      id: "Unstop-Java",
      title: "Unstop - Java",
      subtitle: "Beginner & Intermediate",
      images: [
        "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/java%20beginners_page-0001.jpg?updatedAt=1743781840588",
        "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/java%20intermediate_page-0001.jpg?updatedAt=1743781840718"
      ]
    },
    {
      id: "Udemy-Python",
      title: "Udemy - Python",
      subtitle: "Course Completion",
      images: [
        "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/python_page-0001.jpg?updatedAt=1743781840722"
      ]
    },
    {
      id: "Udemy-Linux",
      title: "Udemy - Linux & Windows Commands",
      subtitle: "Course Completion",
      images: [
        "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/windows%20command%20line%20basics_page-0001.jpg?updatedAt=1743781840652"
      ]
    },
    {
      id: "Unstop-DBMS",
      title: "Unstop - DBMS",
      subtitle: "Database Management",
      images: [
        "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/DBMS_page-0001.jpg?updatedAt=1743781840548"
      ]
    }
  ];
  
  const educationItems = [
    {
      id: "be",
      title: "B.E Computer Science",
      institution: "Sri Shakthi Institute of Engineering and Technology",
      details: "Cyber Security",
      period: "2022-2026",
      grade: "8.36 CGPA",
      icon: "faGraduationCap"
    },
    {
      id: "hsc",
      title: "Higher Secondary",
      institution: "KCAD Chidhambaram Ganagiri Matriculation Hr Sec School",
      details: "State Board",
      period: "2022",
      grade: "84.83%",
      icon: "faSchool"
    },
    {
      id: "sslc",
      title: "Secondary School",
      institution: "KCAD Chidhambaram Ganagiri Matriculation Hr Sec School",
      details: "State Board",
      period: "2020",
      grade: "63.6%",
      icon: "faSchool"
    }
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
      <section id="Contact" className="min-h-screen flex flex-col justify-center items-center py-16 px-4">
      {/* Certificates Section */}
      <div className="w-full max-w-6xl mb-16" data-animate>
        <h1 className="text-3xl font-bold mb-10 text-white text-center relative">
          <span className="text-amber-400">Certificates</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
        </h1>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          {certificates.map((certificate) => (
            <div
              key={certificate.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[23%] border border-gray-700 p-4 rounded-md cursor-pointer hover:bg-gray-800 hover:scale-105 transition-all duration-300 shadow-md"
              onClick={() => togglePopup(certificate)}
              data-animate
            >
              <div className="flex flex-col items-center">
                <div className="text-amber-400 mb-2">
                  <i className="fas fa-certificate text-3xl"></i>
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-white text-center">
                  {certificate.title}
                </h2>
                <p className="text-xs text-gray-400 mt-1">{certificate.subtitle}</p>
              </div>
            </div>
          ))}
          {/* Popup */}
          {popupData && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={() => setPopupData(null)}
            >
              <div
                className="relative bg-gray-800 p-6 w-[90%] max-w-lg rounded-lg shadow-lg border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-400 hover:text-white"
                  onClick={() => setPopupData(null)}
                >
                  ✕
                </button>
                <h2 className="font-bold text-lg text-amber-400 mb-4">
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
      </div>

        {/* Education Section */}
      <div className="w-full max-w-6xl mb-16" data-animate>
        <h1 className="text-3xl font-bold mb-10 text-white text-center relative">
          <span className="text-amber-400">Education</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationItems.map((education) => (
            <div
              key={education.id}
              className="border border-gray-700 p-5 rounded-lg flex flex-col bg-gray-800 bg-opacity-50 shadow-md transform hover:scale-105 transition-all duration-300"
              data-animate
            >
              <div className="flex items-center mb-3">
                <div className="bg-amber-400 p-2 rounded-md mr-3">
                <FontAwesomeIcon  icon={`${education.icon}`}></FontAwesomeIcon>
                </div>
                <h2 className="text-lg font-semibold text-white">
                  {education.title}
                </h2>
              </div>
              <p className="text-sm text-gray-300 mb-2">{education.institution}</p>
              <p className="text-sm text-gray-400">{education.details}</p>
              <div className="mt-auto pt-2 flex justify-between items-center">
                <span className="text-xs text-amber-400">{education.period}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded text-white">{education.grade}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

  
        {/* Contact Buttons Section */}
        <div className="w-full max-w-6xl" data-animate>
        <h1 className="text-3xl font-bold mb-10 text-white text-center relative">
          Get in <span className="text-amber-400">Touch</span>
          <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-amber-400"></span>
        </h1>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          {/* LinkedIn Button */}
          <button
            className="group flex flex-col items-center justify-center p-5 rounded-md bg-[#0077b5] text-white font-semibold hover:bg-[#005a8d] hover:scale-110 transition-all duration-300 ease-in-out relative w-24 h-24"
            onClick={() => window.open("https://www.linkedin.com/in/nivash-m-2k4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", "_blank")}
            data-animate
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-3xl group-hover:text-white"
            />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              LinkedIn
            </span>
          </button>
          <button
            className="group flex flex-col items-center justify-center p-5 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-110 transition-all duration-300 ease-in-out relative w-24 h-24"
            onClick={() => (window.location.href = "mailto:nivashmareesh07@gmail.com")}
            data-animate
          >
            <IoMdMail className="text-3xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              Email
            </span>
          </button>
          <button
            className="group flex flex-col items-center justify-center p-5 rounded-md bg-green-700 text-white font-semibold hover:bg-green-800 hover:scale-110 transition-all duration-300 ease-in-out relative w-24 h-24"
            onClick={() => (window.location.href = "tel:+8248464355")}
            data-animate
          >
            <FaPhone className="text-3xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              Phone
            </span>
          </button>
          <button
            className="group flex flex-col items-center justify-center p-5 rounded-md bg-gray-800 text-white font-semibold hover:bg-gray-700 hover:scale-110 transition-all duration-300 ease-in-out relative w-24 h-24"
            onClick={() => window.open("https://github.com/nivash77", "_blank")}
            data-animate
          >
            <FaGithub className="text-3xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              GitHub
            </span>
            </button>
        </div>
      </div>
    </section>
    </>
  );
  
};

export { Contact };
