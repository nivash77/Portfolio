import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { IoMdMail } from "react-icons/io";
import { FaPhone, FaGithub } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section id="contact" className="bg-gradient-to-r from-indigo-500 to-blue-600 py-24">
      <div className="container mx-auto px-6 text-center text-white">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold mb-6"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-xl mb-8"
        >
          I'm open to freelance work, collaborations, or just a friendly chat. Reach out to me!
        </motion.p>
       
      </div>

      {/* Contact Buttons Section */}
      <div className="max-w-6xl mx-auto mt-16 px-6">
       
        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          viewport={{ once: true }}
        >
          {/* LinkedIn Button */}
          <motion.button
            className="group flex flex-col items-center justify-center p-6 rounded-full bg-[#0077b5] text-white font-semibold hover:bg-[#005a8d] hover:scale-110 transition-all duration-300 ease-in-out relative w-28 h-28"
            onClick={() => window.open("https://www.linkedin.com/in/nivash-m-2k4", "_blank")}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FontAwesomeIcon icon={faLinkedin} className="text-4xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              LinkedIn
            </span>
          </motion.button>

          {/* Email Button */}
          <motion.button
            className="group flex flex-col items-center justify-center p-6 rounded-full bg-red-500 text-white font-semibold hover:bg-red-600 hover:scale-110 transition-all duration-300 ease-in-out relative w-28 h-28"
            onClick={() => (window.location.href = "mailto:nivashmareesh07@gmail.com")}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <IoMdMail className="text-4xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              Email
            </span>
          </motion.button>

          {/* Phone Button */}
          <motion.button
            className="group flex flex-col items-center justify-center p-6 rounded-full bg-green-700 text-white font-semibold hover:bg-green-800 hover:scale-110 transition-all duration-300 ease-in-out relative w-28 h-28"
            onClick={() => (window.location.href = "tel:+8248464355")}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaPhone className="text-4xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              Phone
            </span>
          </motion.button>

          {/* GitHub Button */}
          <motion.button
            className="group flex flex-col items-center justify-center p-6 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 hover:scale-110 transition-all duration-300 ease-in-out relative w-28 h-28"
            onClick={() => window.open("https://github.com/nivash77", "_blank")}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FaGithub className="text-4xl group-hover:text-white" />
            <span className="absolute opacity-0 group-hover:opacity-100 group-hover:text-sm group-hover:-translate-y-10 duration-700 text-gray-200">
              GitHub
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
