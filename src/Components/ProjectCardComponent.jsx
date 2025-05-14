import React from "react";

const ProjectCardComponent = ({ title, description, image, link }) => {
  return (
    <>
      {/* card */}
      <section>
        <div
          className="h-full  hover:bg-gradient-to-br from-gray-900 via-gray-600 to-blue-400
 bg-opacity-20 backdrop-blur-md rounded-xl border border-blue-200 p-6 shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-blue-400/50 flex flex-col  justify-between"
        >
          <img
            src={image}
            alt={title}
            className="w-full h-50 object-contain mb-4 rounded-lg"
          />
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-100 text-sm mb-4 flex-grow">{description}</p>
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
    </>
  );
};

export default ProjectCardComponent;
