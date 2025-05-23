import React from "react";
import "../styles/EducationStyles.css"; // <- Import the CSS below

const EducationComponent = () => {
  return (
    <div className="relative bg-black star-bg text-white py-12 px-4 overflow-hidden">
      <div>
        <h4 className="text-5xl text-blue-500 font-bold text-center mb-10 glow-text">
          Education
        </h4>

        <section id="education" className="space-y-16 relative z-10">
          {/* Education 1 */}
          <div className="border-l-4 border-blue-500 pl-6 relative glow-border">
            <div className="absolute w-4 h-4 bg-blue-500 -left-2 top-0 rotate-45 glow-pulse"></div>
            <h3 className="text-xl font-semibold">
              Bachelor of Engineering (B.E)
            </h3>
            <p className="text-lg text-gray-300">
              PSN Institute of Technology and Science
            </p>
            <p className="text-sm text-gray-400 italic">2021 – 2024</p>
          </div>

          {/* Education 2 */}
          <div className="border-l-4 border-blue-500 pl-6 relative glow-border">
            <div className="absolute w-4 h-4 bg-blue-500 -left-2 top-0 rotate-45 glow-pulse"></div>
            <h3 className="text-xl font-semibold">HSC</h3>
            <p className="text-lg text-gray-300">
              Punitha Arulappar Higher Secondary School
            </p>
            <p className="text-sm text-gray-400">2020</p>
          </div>

          {/* Education 3 */}
          <div className="border-l-4 border-blue-500 pl-6 relative glow-border">
            <div className="absolute w-4 h-4 bg-blue-500 -left-2 bottom-0 rotate-45 glow-pulse"></div>
            <h3 className="text-xl font-semibold">SSLC</h3>
            <p className="text-lg text-gray-300">
              Punitha Arulappar Higher Secondary School
            </p>
            <p className="text-sm text-gray-400">2018</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default EducationComponent;
