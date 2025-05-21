import React from "react";
import HeaderComponent from "./HeaderComponent";
import ProjectCardComponent from "./ProjectCardComponent";
import { motion } from "framer-motion";

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
        <div>
          <HeaderComponent />
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-black px-6 py-12"
      >
        <motion.h2
          className="text-3xl font-bold text-blue-500 mb-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Projects I've Built
        </motion.h2>

        <motion.p
          className="text-center py-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          A collection of apps, websites, and experiments I've created with
          passion and precision.
        </motion.p>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 px-5 h-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                visible: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCardComponent {...project} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </>
  );
};

export default ProjectsComponent;
