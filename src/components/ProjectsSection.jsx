import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "blog",
    title: "BLOG Website",
    image: "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/images.png?updatedAt=1743784246754",
    description:
      "Built a modern blog website using Next.js, MongoDB, and REST API routes, allowing users to create posts, manage profiles, browse and interact with other blogs through comments, and experience a fast, dynamic, and user-friendly interface.",
    github: "https://github.com/nivash77/BlogProject",
  },
  {
    id: "food",
    title: "Food Recipes App",
    image: "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/diet.png?updatedAt=1743781556157",
    description:
      "Actively contributed to the development of a website for learning and teaching cooking skills from experts, built with React.js and Express.js, enabling users to explore, share, and discover a diverse range of recipes.",
    github: "https://topping-phi.vercel.app/",
  },
  {
    id: "ai-chat",
    title: "AI CHAT App",
    image: "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/Screenshot%202024-09-19%20160732.png?updatedAt=1743781556081",
    description:
      "Developed a Chat AI application using Gemini AI’s prebuilt model with Streamlit, offering real-time conversational capabilities with a responsive UI.",
    github: "https://github.com/nivash77/AI-CHAT-BOT",
  },
  {
    id: "library",
    title: "Library Management System",
    image: "https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/800X600_Blog09_Hero.jpg?updatedAt=1745434427727",
    description:
      "A console-based Library Management System project in Java that implements all core OOP concepts: Inheritance, Abstraction, Polymorphism, Encapsulation. Organized using DAO pattern and collections.",
    github: "https://github.com/nivash77/LibraryManagement",
  },
];

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-indigo-600 mb-8"
        >
          My Projects
        </motion.h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-lg shadow-md p-4 text-left hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <img src={project.image} alt={project.title} className="rounded-md h-40 w-full object-cover mb-4" />
              <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
              <button className="text-indigo-500 mt-2 hover:underline">View Project →</button>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-white p-6 w-[90%] max-w-md rounded-lg shadow-xl relative"
                initial={{ scale: 0.9, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 30 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-lg"
                  onClick={() => setSelectedProject(null)}
                >
                  ✕
                </button>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-40 object-cover rounded mb-4"
                />
                <h2 className="text-xl font-bold text-gray-800 mb-2">{selectedProject.title}</h2>
                <p className="text-gray-600 text-sm mb-4">{selectedProject.description}</p>
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                   Link
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
