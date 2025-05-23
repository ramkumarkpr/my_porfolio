import React from "react";
import HeaderComponent from "./HeaderComponent";
import HtmlLogo from "../assets/image/html_logo.png";
import CssLogo from "../assets/image/css_logo.png";
import JsLogo from "../assets/image/js_logo.png";
import BootstrapLogo from "../assets/image/bootstrap_logo.png";
import TwCssLogo from "../assets/image/tailwindcss_logo.png";
import ReactLogo from "../assets/image/react_logo.png";
import GitLogo from "../assets/image/git_logo.png";
import ApiLogo from "../assets/image/api_logo.png";
import ClockComponent from "./ClockComponent";
import { motion } from "framer-motion";
import "../index.css";

const SkillComponent = () => {
  return (
    <>
      <section>
        <HeaderComponent />
      </section>

      {/* White Dusk background wrapper */}
      <div className="star-bg relative min-h-screen px-4 md:px-12 py-10">
        {/* The star overlay for twinkle effect */}
        <div className="star-overlay absolute inset-0 pointer-events-none"></div>

        <motion.section
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative z-10 flex flex-col md:flex-row items-center justify-around gap-10 max-w-7xl mx-auto"
        >
          {/* Technical Skills */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            className="glowing-box flex flex-col gap-10 w-full md:w-1/2 py-4"
          >
            <h4 className="text-blue-500 text-2xl font-bold text-center md:text-left mb-6">
              Technical Skills
            </h4>

            <div className="flex flex-wrap justify-center md:justify-start gap-8">
              {[
                {
                  img: HtmlLogo,
                  alt: "HTML",
                  label: "HTML",
                  desc: "Markup language for web pages",
                },
                {
                  img: CssLogo,
                  alt: "CSS",
                  label: "CSS",
                  desc: "Stylesheet language for layout & design",
                },
                {
                  img: BootstrapLogo,
                  alt: "Bootstrap",
                  label: "Bootstrap",
                  desc: "CSS framework for responsive design",
                },
                {
                  img: TwCssLogo,
                  alt: "Tailwind CSS",
                  label: "Tailwind CSS",
                  desc: "Utility-first CSS framework",
                },
                {
                  img: JsLogo,
                  alt: "JavaScript",
                  label: "JavaScript",
                  desc: "Programming language for interactivity",
                },
                {
                  img: ReactLogo,
                  alt: "React",
                  label: "React",
                  desc: "JavaScript library for UI development",
                },
                {
                  img: GitLogo,
                  alt: "GitHub",
                  label: "GitHub",
                  desc: "Version control and project management",
                },
                {
                  img: ApiLogo,
                  alt: "Rest API",
                  label: "Rest API",
                  desc: "Interface for web services",
                },
              ].map(({ img, alt, label, desc }) => (
                <div
                  key={label}
                  className="snow-hover relative group flex flex-col items-center cursor-pointer w-20 sm:w-24"
                >
                  {/* Snowflake divs */}
                  <div className="snowflake" />
                  <div className="snowflake" />
                  <div className="snowflake" />
                  <div className="snowflake" />
                  <div className="snowflake" />

                  <img
                    src={img}
                    alt={alt}
                    className={`w-14 h-14 sm:w-16 sm:h-16 object-contain
                      ${
                        label === "GitHub" || label === "Rest API"
                          ? "bg-white p-2 rounded-full"
                          : ""
                      }`}
                    loading="lazy"
                  />
                  <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs px-3 py-1 rounded w-max max-w-xs text-center z-10 pointer-events-none">
                    {desc}
                  </div>
                  <span className="mt-2 text-sm text-white font-semibold select-none">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Clock Component */}
          <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 px-4">
            <ClockComponent />
          </div>
        </motion.section>
      </div>
    </>
  );
};

export default SkillComponent;
