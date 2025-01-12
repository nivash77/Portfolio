const Img = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center justify-center  pb-10 text-white">
        {/* Who I Am Section */}
        {/* About Me Section */}
        <div className=" max-w-4xl flex flex-col md:flex-row items-center justify-center gap-8 px-6">
          {/* Replace Image with Text */}
          <div className="w-full md:w-1/2 flex flex-col justify-center items-center mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-amber-400">Hi, I'm</h2>
            <h1 className="text-5xl font-extrabold mb-2">Nivash M</h1>
            <h2 className="text-xl italic text-gray-300">
              FullStack Enthusiast
            </h2>
          </div>

          {/* Text Card */}
          <div className="w-full md:w-2/3 flex flex-col items-center md:items-start p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-2xl font-bold text-amber-400 mb-4">About Me</h2>
            <p className="text-gray-300 leading-relaxed text-center md:text-left">
              I am a student at Sri Shakthi Institute of Engineering and
              Technology, actively developing my skills in software, web, and
              Java development. Passionate about learning and contributing to
              innovative projects. My journey as a FullStack Enthusiast is
              driven by curiosity, problem-solving, and a desire to create
              meaningful software solutions.
            </p>
            <a
              href="https://drive.google.com/uc?export=download&id=1FxAylZR33XdE0ki7M3pbT4F1Z5HMZqRU" download
              className="mt-4 inline-block px-6 py-3 bg-amber-400 text-gray-900 font-bold rounded-lg shadow-md hover:bg-amber-500 hover:shadow-lg transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export { Img };
