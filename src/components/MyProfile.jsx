import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap, faSchool } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

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
    subtitle: "Advanced",
    images: [
      "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/DBMS_page-0001.jpg?updatedAt=1743781840548"
    ]
  },
  {
    id: "Guvi-AIMODEL",
    title: "Build own AI App",
    subtitle: "Workshop",
    images: [
      "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/GuviCertification%20-%202m58091M8FS2oY76J6.png?updatedAt=1745435014653"
    ]
  },
  {
    id:"Unstop-FullStack",
    title:"Full-Stack",
    subtitle:"Advanced",
    images: [
      "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/FullStack.jpg?updatedAt=1745856576669"
    ]
  }
];
const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const educationItems = [
  {
    id: "be",
    title: "B.E Computer Science",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    details: "Cyber Security",
    period: "2022-2026",
    grade: "8.36 CGPA",
    icon: faGraduationCap
  },
  {
    id: "hsc",
    title: "Higher Secondary",
    institution: "KCAD Chidhambaram Ganagiri Matriculation Hr Sec School",
    details: "State Board",
    period: "2022",
    grade: "84.83%",
    icon: faSchool
  },
  {
    id: "sslc",
    title: "Secondary School",
    institution: "KCAD Chidhambaram Ganagiri Matriculation Hr Sec School",
    details: "State Board",
    period: "2020",
    grade: "63.6%",
    icon: faSchool
  }
];

const MyProfile = () => {
  const [popupData, setPopupData] = useState(null);

  const togglePopup = (certificate) => {
    setPopupData((prev) =>
      prev && prev.title === certificate.title ? null : certificate
    );
  };

  return (
    <div>
      {/* Certificates Section */}
      <section id="Certificates" className="py-16 px-4 bg-gradient-to-br text-white">
        <motion.h1
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-indigo-600">Certificates</span>
        </motion.h1>

        <div className="flex flex-wrap gap-4 justify-center">
          {certificates.map((certificate, i) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
              onClick={() => togglePopup(certificate)}
              className="cursor-pointer bg-gradient-to-br from-indigo-500 to-purple-600 p-4 rounded-lg shadow-md w-72 border border-gray-700 hover:scale-105 transition-transform hover:shadow-indigo-500"
            >
              <h2 className="font-bold text-lg text-amber-400 mb-1">{certificate.title}</h2>
              <p className="text-sm text-white">{certificate.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {popupData && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
            onClick={() => setPopupData(null)}
          >
            <div
              className="relative bg-gradient-to-br from-indigo-500 to-purple-600 p-6 w-[95%] max-w-md max-h-[80vh] overflow-y-auto rounded-lg shadow-xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-400 hover:text-white"
                onClick={() => setPopupData(null)}
              >
                ✕
              </button>
              <h2 className="font-bold text-lg text-amber-400 mb-4">{popupData.title}</h2>
              <div className="flex flex-col gap-4">
                {popupData.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${popupData.title} ${index + 1}`}
                    className="w-full object-cover rounded border border-gray-700"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Education Section */}
      <section id="Education" className="py-16 px-4 bg-gradient-to-br text-white">
        <motion.h1
          className="text-3xl font-bold mb-10 text-center"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className="text-indigo-600">Education</span>
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {educationItems.map((education) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: -40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              variants={fadeIn}
              className="bg-gradient-to-br from-indigo-500 to-purple-600 border border-gray-700 p-5 rounded-lg flex flex-col bg-opacity-90 shadow-md transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center mb-3">
                <div className="bg-amber-400 p-2 rounded-md mr-3">
                  <FontAwesomeIcon icon={education.icon} />
                </div>
                <h2 className="text-lg font-semibold">{education.title}</h2>
              </div>
              <p className="text-sm text-gray-300 mb-2">{education.institution}</p>
              <p className="text-sm text-gray-400">{education.details}</p>
              <div className="mt-auto pt-2 flex justify-between items-center">
                <span className="text-xs text-amber-400">{education.period}</span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded text-white">{education.grade}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MyProfile;
