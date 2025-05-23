import React, { useEffect, useRef } from "react";
import HeaderComponent from "./HeaderComponent";
import TypeWritter from "./TypeWriter";
import HtmlLogo from "../assets/image/html_logo.png";
import CssLogo from "../assets/image/css_logo.png";
import JsLogo from "../assets/image/js_logo.png";
import BootstrapLogo from "../assets/image/bootstrap_logo.png";
import TwCssLogo from "../assets/image/tailwindcss_logo.png";
import ReactLogo from "../assets/image/react_logo.png";
import GitLogo from "../assets/image/git_logo.png";
import ApiLogo from "../assets/image/api_logo.png";
import CircleProgressComponent from "./CircleProgressComponent";
import { motion } from "framer-motion";

const MainContent = () => {
  return (
    <div>
      <HeaderComponent />
      <TypeWritter />
    </div>
  );
};

export default MainContent;
