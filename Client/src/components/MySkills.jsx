import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faGithub, faJava, faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCode } from "@fortawesome/free-solid-svg-icons";

export const MySkills = () => {
  const skills = [
    { icon: faJava, label: "Java", color: "text-amber-400" },
    { icon: faGithub, label: "Git", color: "text-blue-500" },
    { icon: faPython, label: "Python", color: "text-yellow-500" },
    { icon: faJs, label: "JavaScript", color: "text-yellow-400" },
    { icon: faReact, label: "React", color: "text-cyan-400" },
    { icon: faDatabase, label: "SQL", color: "text-blue-600" }, 
    { icon: faCode, label: "HTML & CSS", color: "text-orange-500" }, 
    { icon: faDatabase, label: "MongoDB", color: "text-green-500" }, 
    { icon: faCode, label: "TailwindCSS", color: "text-teal-400" }, 
  ];

  return (
    <div className="relative w-full flex flex-col items-center justify-center p-6 sm:p-8">
      <h1 className="z-30 text-lg sm:text-xl md:text-2xl font-bold text-white bg-black bg-opacity-50 px-4 py-3 sm:py-5 rounded">
        Skills
      </h1>
      <div className="w-full max-w-4xl grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 md:gap-16 z-10">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="group relative flex flex-col items-center justify-center text-lg sm:text-xl md:text-2xl font-bold cursor-pointer"
          >
            {/* Icon */}
            <span className="relative z-10 flex items-center justify-center">
              <FontAwesomeIcon
                icon={skill.icon}
                className={`text-4xl sm:text-5xl md:text-6xl ${skill.color}`}
              />
            </span>
  
            {/* Hover Text */}
            <div
              className="absolute opacity-0 text-xs sm:text-sm md:text-base font-medium text-white bg-gray-800 py-1 px-2 sm:py-2 sm:px-3 rounded transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-14"
            >
              {skill.label}
            </div>
  
            {/* Decorative Divs */}
            <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-lightblue rounded-tr-lg group-hover:w-full group-hover:h-full group-hover:rounded-lg transition-all duration-500"></div>
            <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 bg-lightblue rounded-bl-lg group-hover:w-full group-hover:h-full group-hover:rounded-lg transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
  
  
};
