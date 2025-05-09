// components/Typing.js
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import profileImage from "../assets/image/profile.png";
import ContactComponent from "./ContactComponent";
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
        "Responsible for Building Beautiful UIs",
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
              <span className="text-blue-500">Front-End Developer</span>{" "}
              dedicated to crafting engaging and responsive user interfaces. I
              specialize in turning ideas into beautifully functional websites
              using modern technologies like HTML, CSS, JavaScript, and React.
            </p>
            <div className="py-7 flex gap-5">
              <button className="bg-blue-600 hover:bg-black text-white font-semibold py-2 px-4 rounded my-work-btn">
                My works
              </button>
              <div flex>
                <button className="bg-blue-600 hover:bg-black font-semibold py-2 px-4 rounded hire-me-btn">
                  Hire me
                </button>
              </div>
            </div>
            <div className="py-2">{<ContactComponent />}</div>
          </div>

          <div>
            <img src={profileImage} className="w-60 p-3" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeWritter;
