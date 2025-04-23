import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-6"
      id="home"
    >
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left md:w-1/2"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Nivash</h1>
        <p className="text-lg md:text-xl">
          FullStack Developer | Java Enthusiast
        </p>
        <a
          href="#projects"
          className="inline-block mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow hover:bg-gray-100 transition"
        >
          View My Work
        </a>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-10 md:mb-0 md:ml-10 md:w-1/2 flex justify-center"
      >
        <img
          src="https://ik.imagekit.io/qd01l9yk3p/ProjectMern%20image/WhatsApp%20Image%202025-01-14%20at%2017.34.58_aa4ca64d.jpg?updatedAt=1743781556438"
          alt="Nivash profile"
          className="w-40 md:w-64 lg:w-80 rounded-xl shadow-lg object-cover border-4 border-white"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
