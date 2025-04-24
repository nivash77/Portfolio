import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WorkshopAndVolunteerSection = () => {
  const workshops = [
    {
      title: "QA360 1-Day Workshop by CDW",
      subtitle: "October 5, 2024 at Sri Shakthi College",
      description: "A one-day workshop focused on quality assurance (QA) concepts and practices.",
    },
    {
      title: "MERN Stack Training (15 Days)",
      subtitle: "Conducted by Rampex Company",
      description: "A comprehensive 15-day training on building full-stack applications using MongoDB, Express.js, React, and Node.js.",
    },
  ];

  const volunteerExperience = {
    title: "Volunteer at Kalam'24 - CTF Event",
    subtitle: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    description: "Contributed to the Capture The Flag (CTF) event by organizing and assisting participants.",
  };

  return (
    <section id="WorkshopAndVolunteer" className="py-24 px-4 bg-gradient-to-br text-white">
      <motion.h1
        className="text-3xl font-bold mb-12 text-center"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <span className="text-indigo-600">Volunteer Experience & Workshop</span>
      </motion.h1>

      {/* Workshops */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-8"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {workshops.map((workshop, index) => (
          <motion.div
            key={index}
            className="bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
            initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
          >
            <h2 className="text-xl font-semibold mb-2">{workshop.title}</h2>
            <p className="text-sm text-gray-300 mb-4">{workshop.subtitle}</p>
            <p className="text-gray-200">{workshop.description}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Volunteer Experience */}
      <motion.div
        className="mt-16 bg-gradient-to-br from-indigo-500 to-purple-600 p-6 rounded-lg shadow-lg hover:scale-105 transition-all duration-300"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        <h2 className="text-xl font-semibold mb-2">{volunteerExperience.title}</h2>
        <p className="text-sm text-gray-300 mb-4">{volunteerExperience.subtitle}</p>
        <p className="text-gray-200">{volunteerExperience.description}</p>
      </motion.div>
    </section>
  );
};

export default WorkshopAndVolunteerSection;
