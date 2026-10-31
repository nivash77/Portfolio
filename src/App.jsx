import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Credentials from "./components/sections/Credentials";
import Activity from "./components/sections/Activity";
import Contact from "./components/sections/Contact";

export default function App() {
  return (
    <div className="site">
      <a className="skip" href="#main">
        Skip to content
      </a>

      <Navbar />

      <main id="main">
        <About />
        <Skills />
        <Projects />
        <Credentials />
        <Activity />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
