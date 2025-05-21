// components/Typing.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profileImage from "../assets/image/contact_profile.png";
import { Link } from "react-router-dom";
import "../styles/glow.css";
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

    return () => {
      // Destroy instance on unmount to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return (
    <div>
      <div className="flex justify-center py-5">
        <div className="p-4 flex gap-4 ">
          <div className="w-dvh p-5 ">
            <h4 className="text-xl text-blue-500 font-extrabold">Hello</h4>
            <h2 className="text-2xl md:text-4xl font-bold text-white py-4">
              I am <span className="text-blue-500" ref={el}></span>
            </h2>
            <p className="text-justify">
              A passionate{" "}
              <span className="text-blue-500 font-bold">
                Front-End Developer
              </span>{" "}
              dedicated to crafting engaging and responsive user interfaces. I
              specialize in turning ideas into beautifully functional websites
              using modern technologies like HTML, CSS, JavaScript, and React.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-center py-6 text-sm text-gray-300">
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
                  className="bg-gray-800 px-3 py-2 rounded shadow-md hover:scale-105 transition hover:bg-blue-600 focus:outline-2 focus:outline-blue-400"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 py-5 text-sm text-gray-300">
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
                <span>Learning JavaFull Stack</span>
              </div>
            </div>

            <div className="py-7 flex gap-5">
              <div>
                <Link
                  to={"/projects"}
                  className="bg-blue-600 hover:bg-blue-400 text-white font-semibold py-2 px-4 rounded"
                >
                  My works
                </Link>
              </div>
              <div>
                <Link
                  to={"/hire/me"}
                  className="bg-blue-600 hover:bg-blue-400 font-semibold py-2 px-4 rounded hire-me-btn"
                >
                  Hire me
                </Link>
              </div>
            </div>
            {/* <div className="py-2">{<ContactComponent />}</div> */}
          </div>

          <div>
            <img src={profileImage} className="w-100 p-3" alt="" />
            <p className="italic text-blue-400 font-bold text-center">
              “Code is like humor. When you have to explain it, it’s bad.”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeWritter;
