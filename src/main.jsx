import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContent from "./Components/MainContent.jsx";
import AboutComponent from "./Components/AboutComponent.jsx";
import LoginComponent from "./Components/LoginComponent.jsx";
import SkillComponent from "./Components/SkillComponent.jsx";
import ProjectsComponent from "./Components/ProjectsComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainContent />,
  },
  {
    path: "/about",
    element: <AboutComponent />,
  },
  {
    path: "/contact",
    element: <LoginComponent />,
  },
  {
    path: "/skills",
    element: <SkillComponent />,
  },
  {
    path: "/projects",
    element: <ProjectsComponent />,
  },
  {
    path: "/hire/me",
    element: <LoginComponent />,
  },
  {
    path: "/projects",
    element: <ProjectsComponent />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
