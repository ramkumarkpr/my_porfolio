import React from "react";
import contactProfile from "../assets/image/contact_profile.png";
import { motion } from "framer-motion";
import HeaderComponent from "./HeaderComponent";
import EducationComponent from "./EducationComponent";
import "../styles/glow.css"; // make sure your styles are imported

const AboutComponent = () => {
  return (
    <>
      <HeaderComponent />

      {/* Add the star-bg container */}
      <div className="star-bg">
        {/* Optional: star overlay for extra twinkle */}
        <div className="star-overlay"></div>

        <div className="min-h-screen px-4 sm:px-6 md:px-16 py-10 relative z-10">
          <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center md:items-start justify-between gap-10 text-white">
            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="w-full md:w-1/2"
            >
              <h4 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-400 mb-6 border-b-4 border-blue-500 pb-2 w-fit animate-pulse">
                About Me
              </h4>

              <ul className="space-y-6 text-base sm:text-lg leading-relaxed text-justify">
                {[
                  <>
                    I'm{" "}
                    <span className="text-blue-500 font-semibold">
                      Ramkumar
                    </span>
                    , a passionate Front-End Developer from{" "}
                    <span className="text-blue-500">Tenkasi</span>. My journey
                    into web development began with YouTube tutorials and
                    W3Schools. With{" "}
                    <span className="text-blue-500">
                      6 months of experience
                    </span>
                    , I specialize in{" "}
                    <span className="text-blue-500">
                      React, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS
                    </span>
                    .
                  </>,
                  <>
                    I love <span className="text-blue-500">API handling</span>,
                    creating intuitive UIs, and crafting responsive, dynamic
                    designs. I'm always exploring new tools to grow my skillset.
                  </>,
                  <>
                    My goal is to become a{" "}
                    <span className="text-blue-500">
                      Java Full Stack Developer
                    </span>{" "}
                    and build applications at scale, like{" "}
                    <span className="text-blue-500">Microsoft Teams</span>.
                  </>,
                  <>
                    Outside of tech, I spend time on our{" "}
                    <span className="text-blue-500">family farm</span>, help my
                    father, and dabble in{" "}
                    <span className="text-blue-500">
                      3D animation with Blender
                    </span>
                    .
                  </>,
                ].map((content, idx) => (
                  <li
                    key={idx}
                    className="relative pl-8 before:absolute before:left-0 before:text-blue-400 before:text-xl before:animate-glow-bullet before:content-['💻']"
                  >
                    {content}
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <EducationComponent />
              </div>
            </motion.div>

            {/* Profile Image Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
              className="w-full md:w-1/2 flex justify-center md:justify-end"
            >
              <div className="relative group">
                <img
                  src={contactProfile}
                  alt="Profile"
                  className="w-48 sm:w-56 md:w-72 rounded-full shadow-2xl border-4 border-blue-400 animate-glow-img"
                />
                <div className="absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutComponent;
