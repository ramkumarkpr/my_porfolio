import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profileImage from "../assets/image/contact_profile.png";
import { Link } from "react-router-dom";
import "../styles/glow.css";
import { motion } from "framer-motion";

const TypeWritter = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: [
        "Ram kumar",
        "a Front-End Developer",
        "a Passionate Coder",
        "a Tailwind CSS Ninja",
        "an API Integrator",
        "a React Explorer",
        "a Problem Solver",
      ],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => typed.current.destroy();
  }, []);

  return (
    <div className="w-full bg-black text-white px-4 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h4 className="text-xl text-blue-500 font-extrabold">Hello</h4>
          <h2 className="text-2xl md:text-4xl font-bold text-white py-4">
            I am <span className="text-blue-500" ref={el}></span>
          </h2>
          <p className="text-justify text-sm md:text-base">
            A passionate{" "}
            <span className="text-blue-500 font-bold">Front-End Developer</span>{" "}
            dedicated to crafting engaging and responsive user interfaces. I
            specialize in turning ideas into beautifully functional websites
            using modern technologies like HTML, CSS, JavaScript, and React.
          </p>

          {/* Skills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:grid-cols-4 text-center py-6 text-sm text-gray-300">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "React",
              "Tailwind CSS",
              "Bootstrap",
              "Git",
              "API Integration",
            ].map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-3 py-2 rounded shadow-md hover:scale-105 transition hover:bg-blue-600"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Experience */}
          <div className="flex flex-wrap gap-4 py-5 text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">💼</span>
              <span>6+ Months of Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">📂</span>
              <span>10+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-400 text-xl">🚀</span>
              <span>Learning Java Full Stack</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 py-4">
            <Link
              to="/projects"
              className="bg-blue-600 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
            >
              My works
            </Link>
            <Link
              to="/hire/me"
              className="bg-blue-600 hover:bg-blue-400 font-semibold py-2 px-4 rounded"
            >
              Hire me
            </Link>
          </div>
        </div>

        {/* Profile Image Section */}
        <motion.div
          className="w-full md:w-1/2 text-center"
          initial={{ x: 100, opacity: 0, scale: 0.8 }}
          whileInView={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        >
          <img
            src={profileImage}
            className="w-60 md:w-80 mx-auto p-3"
            alt="Profile"
          />
          <p className="italic text-blue-400 font-bold text-center mt-4">
            “Code is like humor. When you have to explain it, it’s bad.”
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default TypeWritter;
