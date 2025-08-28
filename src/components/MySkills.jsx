import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faGithub,
  faJava,
  faJs,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiHtml5, SiCss3 ,SiSpringboot} from "react-icons/si";

const skills = [
  { icon: faJava, label: "Java", color: "text-amber-400", type: "fa" },
  { icon: faGithub, label: "Git", color: "text-blue-500", type: "fa" },
  { icon: faPython, label: "Python", color: "text-yellow-500", type: "fa" },
  { icon: faJs, label: "JavaScript", color: "text-yellow-400", type: "fa" },
  { icon: faReact, label: "React", color: "text-cyan-400", type: "fa" },
  { icon: faDatabase, label: "SQL", color: "text-blue-600", type: "fa" },
  { icon: faDatabase, label: "MongoDB", color: "text-green-500", type: "fa" },
  { icon: <SiHtml5 />, label: "HTML", color: "text-orange-500", type: "custom" },
  { icon: <SiCss3 />, label: "CSS", color: "text-blue-400", type: "custom" },
  { icon: <SiTailwindcss />, label: "TailwindCSS", color: "text-teal-400", type: "custom" },
  { icon: <SiExpress />, label: "Express.js", color: "text-black", type: "custom" },
  { icon: <SiNextdotjs />, label: "Next.js", color: "text-gray-800", type: "custom" },
  {icon:<SiSpringboot/>, label:"Spring Boot", color:"text-green-600", type:"custom"}
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 30 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4 } },
};

const MySkills = () => {
  return (
    <motion.div
      id="skills"
      className="py-24 px-4 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-center text-3xl md:text-4xl font-bold text-white mb-4"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            className="relative group flex flex-col items-center justify-center p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {/* Icon */}
            {skill.type === "fa" ? (
              <FontAwesomeIcon
                icon={skill.icon}
                className={`text-4xl md:text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110 mb-4`}
              />
            ) : (
              <div
                className={`text-4xl md:text-5xl ${skill.color} transition-transform duration-300 group-hover:scale-110 mb-4`}
              >
                {skill.icon}
              </div>
            )}

            {/* Label */}
            <span className="absolute bottom-0 translate-y-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium text-gray-800">
              {skill.label}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default MySkills;
