import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import MySkills from "./components/MySkills";
import Footer from "./components/Footer";
import MyProfile from "./components/MyProfile";
import WorkshopAndVolunteerSection from "./components/Workshop";
import { Menu, X, User } from "lucide-react";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / windowHeight) * 100;
      setScrollProgress(scrollPercent);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-sans scroll-smooth">
      {/* Scroll Indicator */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1 transition-all duration-200" style={{ width: `${scrollProgress}%` }}></div>
      </div>
      {/* Navigation Bar */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-40 shadow-md border-b border-gray-200 backdrop-blur-md bg-opacity-90"
      >
        <div className="container mx-auto px-6 py-4 flex justify-between items-center bg-white/30">
          <a href="#about">
            <h1 className="text-xl font-bold flex items-center gap-2">
              <User className="w-5 h-5 text-indigo-500" />
            </h1>
          </a>
          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6 text-sm font-medium text-gray-700">
            <a href="#about" className="hover:text-indigo-600 transition">About</a>
            <a href="#skills" className="hover:text-indigo-600 transition">Skills</a>
            <a href="#projects" className="hover:text-indigo-600 transition">Projects</a>
            <a href="#WorkshopAndVolunteer" className="hover:text-indigo-600 transition">Achievement</a>
            <a href="#contact" className="hover:text-indigo-600 transition">Contact</a>
          </nav>
          <button onClick={toggleMobileMenu} className="md:hidden focus:outline-none">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden px-6 pb-4 bg-white/80 backdrop-blur-sm text-sm font-medium space-y-2"
          >
            <a href="#about" className="block hover:text-indigo-600" onClick={toggleMobileMenu}>About</a>
            <a href="#skills" className="block hover:text-indigo-600" onClick={toggleMobileMenu}>Skills</a>
            <a href="#projects" className="block hover:text-indigo-600" onClick={toggleMobileMenu}>Projects</a>
            <a href="#WorkshopAndVolunteer" className="block hover:text-indigo-600" onClick={toggleMobileMenu}>Achievement</a>
            <a href="#contact" className="block hover:text-indigo-600" onClick={toggleMobileMenu}>Contact</a>
          </motion.div>
        )}
      </motion.header>
      {/* Sections */}
      <main className="pt-14 space-y-24">
        <HeroSection />
        <section id="about"><AboutSection /></section>
        <section id="skills"><MySkills /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="myprofile"><MyProfile /></section>
        <section id="WorkshopAndVolunteer"><WorkshopAndVolunteerSection /></section>
        <section id="contact"><ContactSection /></section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
