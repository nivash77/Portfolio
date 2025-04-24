import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const AboutSection = () => {
  return (
    <section id="about" className="bg-white py-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="container mx-auto px-6 text-center"
      >
        <motion.h2 variants={fadeUp} className="text-4xl font-bold text-indigo-600 mb-6">
          About Me
        </motion.h2>
        <motion.p
         initial={{ opacity: 0, y: -40 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6 }}
          variants={fadeUp}
          className="text-gray-700 max-w-3xl mx-auto text-lg leading-relaxed"
        >
          Aspiring Full-Stack with a solid foundation in programming and web technologies. Demonstrates strong organizational
          skills, consistently meeting deadlines while applying technical expertise to solve complex problems. Seeking opportunities
          to gain hands-on experience, contribute to innovative projects, and further develop professionally.
        </motion.p>
        <motion.div
          variants={fadeUp}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button
            onClick={() =>
              document.getElementById("projects").scrollIntoView({ behavior: "smooth" })
            }
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow hover:bg-indigo-500 transition transform hover:scale-105"
          >
            Learn More
          </button>
          <a
     
            href="https://drive.google.com/uc?export=download&id=11ta6A9E9IeLa7GoVVSVS9iCU3scJleSC"
            download
            className="px-6 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow hover:bg-indigo-500 transition transform hover:scale-105 text-center"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
