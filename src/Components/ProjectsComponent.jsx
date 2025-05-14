import React from "react";
import HeaderComponent from "./HeaderComponent";
import ProjectCardComponent from "./ProjectCardComponent";
import project_1 from "../assets/image/project_1.png";
import project_2 from "../assets/image/project_2.png";
import project_3 from "../assets/image/project_3.png";
import project_4 from "../assets/image/project_4.png";
import project_5 from "../assets/image/project_5.png";

const ProjectsComponent = () => {
  const projects = [
    {
      title: "ACSTY – Journal Publication Website",
      description:
        "Developed a professional platform for international conferences and paper publications with a modern UI and responsive layout.",
      image: project_1,
      link: "https://acsty-redesigned.netlify.app/",
    },

    {
      title: "ACSTY – Journal Publication Website (2)",
      description:
        "Redesigned the UI/UX for enhanced accessibility, seamless navigation, and consistent design across all devices.",
      image: project_2,
      link: "https://acsty-completion.netlify.app/",
    },
    {
      title: "RK Learning – Educational Resource Platform",
      description:
        "Built a modern, responsive educational site with curated content and a user-friendly, accessible design",
      image: project_3,
      link: "https://rk-learning-site.netlify.app/",
    },
    {
      title: "Skywing Packers & Movers – UI Text Audit",
      description:
        "Reviewed and corrected grammatical and language errors across the website to improve professionalism, readability, and client communication as part of an interview selection task.",
      image: project_4,
      link: "https://skywingpakers-movers-error-correction.netlify.app/",
    },
    {
      title: "Student Registration CRUD App",
      description:
        "Built a student registration app with local storage and mock API integration, supporting add, view, and delete operations.",
      image: project_5,
      link: "https://students-register-form.netlify.app/",
    },
  ];
  return (
    <>
      <section>
        <div> {<HeaderComponent />} </div>
      </section>

      <section className="bg-black px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-500 mb-10 text-center">
          Projects I've Built
        </h2>
        <p className="text-center py-5">
          A collection of apps, websites, and experiments I've created with
          passion and precision.
        </p>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-5 h-full">
          {projects.map((project, index) => (
            <ProjectCardComponent key={index} {...project} />
          ))}
        </div>
      </section>

      <section></section>
    </>
  );
};

export default ProjectsComponent;
