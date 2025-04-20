const Img = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-8 sm:py-12 px-4 sm:px-6" data-aos="fade-up">
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-amber-400 transition-all duration-300 hover:text-amber-300">Hi, I'm</h2>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mt-2 transition-transform duration-300 hover:scale-105">Nivash M</h1>
        <h2 className="text-lg sm:text-xl italic text-gray-300 mt-2 transition-all duration-300 hover:text-gray-200">FullStack Enthusiast</h2>
      </div>
      <div className="md:w-1/2 mt-6 md:mt-0 p-5 sm:p-6 bg-black bg-opacity-50 rounded-xl shadow-lg transition-all duration-300 hover:bg-opacity-70" data-aos="fade-left">
        <h2 className="text-xl sm:text-2xl font-bold text-amber-400 mb-4 transition-all duration-300 hover:text-amber-300">About Me</h2>
        <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
          I am a student at Sri Shakthi Institute of Engineering and Technology, actively developing my skills in software, web, and Java development. Passionate about learning and contributing to innovative projects.
        </p>
        <a
          href="https://drive.google.com/uc?export=download&id=1FxAylZR33XdE0ki7M3pbT4F1Z5HMZqRU"
          download
          className="mt-4 inline-block px-6 py-3 bg-amber-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-amber-500 transition-all duration-300 hover:scale-105"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
};


export { Img };
