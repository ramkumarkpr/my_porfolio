import React from "react";
import logo from "../assets/image/logo.png";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <div>
      {/* navbar */}

      <div className="w-full bg-black">
        <nav className="flex justify-between items-center p-3">
          <div className="flex items-center gap-4">
            <img src={logo} className="w-20 rounded-full" alt="" />
            <h4 className="text-2xl logo-text font-bold">Unsullied Ram</h4>
          </div>

          <div className="">
            <ul className="flex gap-6 text-[18px] font-bold">
              <Link className="nav-link" to={"/"}>
                Home
              </Link>
              <Link className="nav-link" to={"/about"}>
                About
              </Link>
              <Link to={"/skills"} className="nav-link">
                Skills
              </Link>
              <Link to={"/projects"} className="nav-link">
                Projects
              </Link>
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderComponent;
