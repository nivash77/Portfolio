import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const gitlink = "https://github.com/nivash77";
  return (
    <>
      <div className="flex flex-col justify-center items-center h-[80vh] gap-[2rem]">
        <div className="flex flex-row gap-[2rem]">
          
          {/* LinkedIn Button */}
          <section className="flex justify-center items-center">
            <button
              href="*****"
              className="group flex justify-center p-4 rounded-md bg-[#0077b5] text-white font-semibold hover:bg-[#005a8d] hover:scale-110 transition-all duration-300 ease-in-out relative"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl group-hover:text-white" />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200"
              >
                Linkedin
              </span>
            </button>
          </section>

          {/* Email Button */}
          <section className="flex justify-center items-center">
            <button
              href="****"
              className="group flex justify-center p-4 rounded-md bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-110 transition-all duration-300 ease-in-out relative"
            >
              <IoMdMail className="text-3xl group-hover:text-white" />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200"
              >
                Email
              </span>
            </button>
          </section>

          {/* Phone Button */}
          <section className="flex justify-center items-center">
            <button
              href="****"
              className="group flex justify-center p-4 rounded-md bg-green-700 text-white font-semibold hover:bg-green-800 hover:scale-110 transition-all duration-300 ease-in-out relative"
            >
              <FaPhone className="text-3xl group-hover:text-white" />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200"
              >
                Phone
              </span>
            </button>
          </section>

          {/* GitHub Button */}
          <section className="flex justify-center items-center">
            <button
              href={gitlink}
              target="_blank"
              className="group flex justify-center p-4 rounded-md bg-black text-white font-semibold hover:bg-gray-800 hover:scale-110 transition-all duration-300 ease-in-out relative"
            >
              <FaGithub className="text-3xl group-hover:text-white" />
              <span
                className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200"
              >
                GitHub
              </span>
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export { Contact };
