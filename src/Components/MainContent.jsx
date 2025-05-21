import React, { useEffect, useRef } from "react";
import HeaderComponent from "./HeaderComponent";
import TypeWritter from "./TypeWriter";
import HtmlLogo from "../assets/image/html_logo.png";
import CssLogo from "../assets/image/css_logo.png";
import JsLogo from "../assets/image/js_logo.png";
import BootstrapLogo from "../assets/image/bootstrap_logo.png";
import TwCssLogo from "../assets/image/tailwindcss_logo.png";
import ReactLogo from "../assets/image/react_logo.png";
import GitLogo from "../assets/image/git_logo.png";
import ApiLogo from "../assets/image/api_logo.png";
import CircleProgressComponent from "./CircleProgressComponent";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <div>
      <HeaderComponent />
      <TypeWritter />

      {/* Skills Section */}

      {/* Col - 1 */}
      <motion.section
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-around gap-10 py-10 px-4"
      >
        {/* Technical Skill */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
          className="glowing-box flex flex-col gap-13  py-3 justify-center"
        >
          {/* row -1 Tech Skills */}
          <h4 className="text-blue-500 text-xl font-bold text-center">
            Technical Skills
          </h4>

          <div className="flex flex-wrap gap-15 items-center p-5">
            {/* HTML */}
            <div className="relative group flex flex-col items-center">
              <img src={HtmlLogo} width={55} alt="HTML" />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                Markup language for web pages
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                HTML
              </span>
            </div>

            {/* CSS */}
            <div className="relative group flex flex-col items-center">
              <img src={CssLogo} width={55} alt="CSS" />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                Stylesheet language for layout & design
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                CSS
              </span>
            </div>

            {/* Bootstrap */}
            <div className="relative group flex flex-col items-center">
              <img src={BootstrapLogo} width={55} alt="Bootstrap" />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                CSS framework for responsive design
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                Bootstrap
              </span>
            </div>
            {/* Tailwind CSS */}
            <div className="relative group flex flex-col items-center">
              <img src={TwCssLogo} width={55} alt="Tailwind CSS" />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                Utility-first CSS framework
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                Tailwind CSS
              </span>
            </div>
          </div>

          {/* row -2 Tech Skills */}

          <div className="flex flex-wrap gap-15 items-center p-5">
            {/* JavaScript */}
            <div className="relative group flex flex-col items-center">
              <img src={JsLogo} width={55} alt="JavaScript" />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                Programming language for interactivity
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                JavaScript
              </span>
            </div>

            {/* React */}
            <div className="relative group flex flex-col items-center">
              <img src={ReactLogo} width={55} alt="React" />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                JavaScript library for UI development
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                React
              </span>
            </div>

            {/* Github */}
            <div className="relative group flex flex-col items-center">
              <img
                src={GitLogo}
                width={55}
                className="bg-white rounded-full"
                alt="Tailwind CSS"
              />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                Centralized For Managing Projects
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                GitHub
              </span>
            </div>
            {/* Rest API */}
            <div className="relative group flex flex-col items-center">
              <img
                src={ApiLogo}
                width={55}
                className="bg-white p-3 rounded-full"
                alt="Tailwind CSS"
              />
              <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                Centralized For Managing Projects
              </div>
              <span className="mt-2 text-sm text-white py-2 font-semibold">
                Rest API
              </span>
            </div>
          </div>
        </motion.div>

        {/* col - 2 */}

        {/* Professional Skills */}

        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
          className="flex flex-col gap-20 py-3 items-center"
        >
          <div className="glowing-box flex flex-col gap-15">
            <h4 className="text-blue-500 text-xl text-center font-bold">
              Professional Skills
            </h4>
            {/* row -1 */}

            <div className="flex flex-wrap gap-10 justify-center">
              <div className="flex flex-col items-center">
                <CircleProgressComponent percentage={75} color="#3B82F6" />
                <span className="text-white py-5 font-semibold">
                  Creativity
                </span>
              </div>
              <div className="flex flex-col items-center">
                <CircleProgressComponent percentage={63.5} color="#3B82F6" />
                <span className="text-white  py-5 font-semibold">
                  Problem Solving
                </span>
              </div>
            </div>

            {/* row -2 */}

            <div className="flex gap-16 justify-center">
              <div className="flex flex-col items-center">
                <CircleProgressComponent percentage={68.3} color="#3B82F6" />
                <span className="text-white  py-5 font-semibold">
                  Team Work
                </span>
              </div>
              <div className="flex flex-col items-center">
                <CircleProgressComponent percentage={61} color="#3B82F6" />
                <span className="text-white  py-5 font-semibold">
                  Communication
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default MainContent;
