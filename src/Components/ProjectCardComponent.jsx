import React from "react";
import "../styles/glow.css"; // Star background and glow effect

const ProjectCardComponent = ({ title, description, image, link }) => {
  return (
    <div className="star-bg p-4 sm:p-6 md:p-8 h-full">
      <div className="star-overlay"></div>

      <section className="relative z-10 h-full">
        <div
          className="h-[550px] w-full bg-opacity-20 backdrop-blur-md rounded-xl border border-blue-200 p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-blue-400/50 
          flex flex-col justify-between hover:bg-gradient-to-br from-gray-900 via-gray-600 to-blue-400"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-40 sm:h-48 object-contain mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-100 text-sm mb-4 overflow-hidden flex-grow">
            {description}
          </p>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white font-semibold hover:underline"
          >
            View Project →
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectCardComponent;
