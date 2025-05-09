import React from "react";
import profileImage from "../assets/image/profile.png";
import { APP_COLORS, APP_TEXT_COLORS_CLASSES } from "../assets/utils/colors";
import HeaderComponent from "./HeaderComponent";
// import ClockComponent from "./ClockComponent";
import EducationComponent from "./EducationComponent";

const AboutComponent = () => {
  return (
    <div>
      <div>{<HeaderComponent />}</div>
      {/* <div> {<ClockComponent />} </div> */}
      <div className="flex gap-16 justify-around">
        <div className="flex p-4 gap-4">
          <div className="w-dvh p-5 text-justify">
            <h4 className="text-5xl font-bold text-blue-500">About Me</h4>
            <div className="py-5">
              <p className="list-disc list-inside space-y-2 fa fa-code">
                <li>
                  I'm <span className="text-blue-500 font-bold">Ramkumar</span>,
                  a passionate Front-End Developer from
                  <span className="text-blue-500"> Tenkasi</span>. My journey
                  into web development began with online resources like YouTube
                  tutorials and W3Schools, and since then, I<sup>'</sup>
                  ve been constantly learning and building. With <npsb></npsb>
                  <span className="text-blue-500">
                    6 months of hands-on experience, <npsb></npsb>
                  </span>
                  <npsb></npsb>I specialize in technologies like
                  <span className="text-blue-500">
                    React, JavaScript, Tailwind CSS, Bootstrap, HTML, and CSS.
                  </span>
                </li>
                <li>
                  What excites me the most is{" "}
                  <span className="text-blue-500">
                    API handling, creating intuitive user interfaces, and
                    bringing ideas to life with responsive, dynamic web designs.
                  </span>
                  I<up>'</up>m always eager to explore new tools and frameworks
                  to enhance my skill set.
                </li>
                <li className="p-1">
                  My ultimate career goal is to become a <npsb></npsb>
                  <span className="text-blue-500">
                    JavaFull Stack Developer
                  </span>
                  <npsb></npsb> and secure a position in a reputable company.
                  One day, I aspire to build a large-scale application like
                  <span className="text-blue-500">
                    {" "}
                    <npsb></npsb>
                    Microsoft Teams.
                  </span>
                </li>
                <li className="py-1">
                  Beyond coding, I enjoy spending time on my <npsb></npsb>
                  <span className="text-blue-500">
                    family<sup>'</sup>s farm
                  </span>
                  , helping my father, and occasionally diving into the world of
                  <span className="text-blue-500">
                    {" "}
                    <npsb></npsb>
                    3D animation and modeling using Blender.
                  </span>
                </li>
              </p>
            </div>

            {/* Education */}
            <div>
              <h4 className="">{<EducationComponent />}</h4>
            </div>
          </div>
        </div>

        <div className="">
          <img src={profileImage} className="w-60 p-3" alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;
