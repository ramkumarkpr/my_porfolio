import React from "react";
import HeaderComponent from "./HeaderComponent";
import HtmlLogo from "../assets/image/html_logo.png";
import CssLogo from "../assets/image/css_logo.png";
import JsLogo from "../assets/image/js_logo.png";
import BootstrapLogo from "../assets/image/bootstrap_logo.png";
import TwCssLogo from "../assets/image/tailwindcss_logo.png";
import ReactLogo from "../assets/image/react_logo.png";
import CircleProgressCpmponent from "./CircleProgressCpmponent";

const SkillComponent = ({ skillName, level, icon }) => {
  return (
    <>
      <section>
        <div>{<HeaderComponent />}</div>
      </section>

      {/* Skills Section */}

      <section className="flex justify-around py-5">
        <div className="flex flex-col gap-10">
          {/* Technical Skill */}
          <h4 className="text-blue-500 text-xl">Technical Skills</h4>
          <div className="py-3">
            <div className="flex flex-col flex-wrap gap-8">
              {/* HTML */}
              <div className="relative group flex flex-col items-center">
                <img src={HtmlLogo} width={50} alt="HTML" />
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                  Markup language for web pages
                </div>
                <span className="mt-2 text-sm text-white">HTML</span>
              </div>

              {/* CSS */}
              <div className="relative group flex flex-col items-center">
                <img src={CssLogo} width={50} alt="CSS" />
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                  Stylesheet language for layout & design
                </div>
                <span className="mt-2 text-sm text-white">CSS</span>
              </div>

              {/* JavaScript */}
              <div className="relative group flex flex-col items-center">
                <img src={JsLogo} width={50} alt="JavaScript" />
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                  Programming language for interactivity
                </div>
                <span className="mt-2 text-sm text-white">JavaScript</span>
              </div>

              {/* Bootstrap */}
              <div className="relative group flex flex-col items-center">
                <img src={BootstrapLogo} width={50} alt="Bootstrap" />
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                  CSS framework for responsive design
                </div>
                <span className="mt-2 text-sm text-white">Bootstrap</span>
              </div>

              {/* Tailwind CSS */}
              <div className="relative group flex flex-col items-center">
                <img src={TwCssLogo} width={50} alt="Tailwind CSS" />
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                  Utility-first CSS framework
                </div>
                <span className="mt-2 text-sm text-white">Tailwind CSS</span>
              </div>

              {/* React */}
              <div className="relative group flex flex-col items-center">
                <img src={ReactLogo} width={50} alt="React" />
                <div className="absolute bottom-full mb-2 opacity-0 group-hover:opacity-100 transition bg-black text-white text-xs px-2 py-1 rounded">
                  JavaScript library for UI development
                </div>
                <span className="mt-2 text-sm text-white">React</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Skills */}
        <div className="py-15">
          {/* Creativity */}
          <div>
            {
              <CircleProgressCpmponent
                percentage={80}
                color="#3B82F6
"
              />
            }
            <span className="text-white">Team Work</span>
          </div>
        </div>

        {/* Communication */}
      </section>
    </>
  );
};

export default SkillComponent;
