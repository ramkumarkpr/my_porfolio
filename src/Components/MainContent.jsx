import React, { useEffect, useRef } from "react";
import HeaderComponent from "./HeaderComponent";
import TypeWritter from "./TypeWriter";
import AboutComponent from "./AboutComponent";
const MainContent = () => {
  return (
    <div>
      <HeaderComponent />
      <TypeWritter />
      {/* <AboutComponent /> */}
    </div>
  );
};

export default MainContent;
