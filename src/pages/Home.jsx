import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../App.css';
import { FaLinkedin, FaDownload, FaGithub, FaEnvelope, FaArrowDown, FaPhoneAlt } from 'react-icons/fa';
import About from './About';
import Projects from './projects';
import Skills from './skills';
import Contact from './contact';

function Home() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Full-Stack Developer';


  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  return (
    <>
      <Navbar />
      <div id="home" className="pt-24 sm:pt-10 min-h-[80vh] sm:min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">

        <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl gap-10">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-6 text-center md:text-left md:pl-20 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold">
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Joshmitha
              </span>
            </h1>

            <h2 className="text-2xl md:text-4xl text-gray-800 min-h-[3rem] font-medium">
              {displayText}
              <span className="animate-pulse text-black">|</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600">
              Build Fast. Build Smart. Build Full Stack.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
  href="#projects"
  className="border border-gray-400 hover:bg-gray-100 rounded-full px-6 py-2 text-black font-semibold transition duration-300 shadow-md"
>
  View Projects
</a>

<a
  href="/Joshmitha_BWM_Resume.pdf"
  download="Joshmitha_Resume.pdf"
  className="flex items-center gap-2 border border-gray-400 hover:bg-gray-100 transition px-6 py-2 text-black rounded-full font-semibold shadow-sm"
>
  <FaDownload />
  Resume
</a>



            </div>
            <a
  href="#contact"
  className=" border bg-gradient-to-r hover:scale-105 from-blue-500 to-purple-600 hover:opacity-90   transition px-30 py-2 text-white rounded-full font-semibold shadow-sm"
>
  Hire Me
</a>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start gap-6 text-2xl mt-6">
              <a
                href="https://www.linkedin.com/in/joshmitha-devarakonda-aa547231a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:bg-blue-100 hover:text-blue-600 transition transform hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/joshmitha-2000"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:bg-gray-200 hover:text-black transition transform hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:djoshmithadevarakonda@gmail.com"
                className="p-3 bg-white rounded-full shadow-md hover:shadow-xl hover:bg-pink-100 hover:text-pink-600 transition transform hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="md:w-1/2 flex mt-10 justify-center">
            <img
              src="/WhatsApp Image 2025-01-03 at 10.52.17 PM.jpeg"
              alt="Profile"
              className="w-60 h-60 md:w-96 md:h-96 rounded-full object-cover shadow-lg transition-transform duration-500 hover:scale-105 floating"
            />
          </div>
        </div>
      </div>

      {/* Down Arrow with scroll */}
      <div className="flex justify-center mt-[-20px] mb-6 animate-bounce">
        <button
          onClick={() =>
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
          }
        >
          <FaArrowDown className="text-3xl p-2 border border-gray-300 rounded-full bg-white shadow text-gray-600" />
        </button>
      </div>

      {/* Sections */}
      <div id="about">
        <About />
      </div>
      <div id="skills">
  <Skills />
</div>

<div id="projects">
  <Projects />
</div>

      <div id="contact">
        <Contact />
      </div>

      {/* Floating Phone Icon */}
      <button
        onClick={() =>
          document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="fixed right-4 bottom-1/6 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform z-50"
      >
        <FaPhoneAlt />
      </button>
    </>
  );
}

export default Home;
