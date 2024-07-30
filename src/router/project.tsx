import { Route, Routes } from "react-router-dom";
import Project from "../pages/project/Project";
import ProjectDetail from "pages/project/ProjectDetail";
import WhoIAM from "pages/project/WhoIAM";

export default function ProjectRouter() {
  return (
    <Routes>
      <Route path="/project" element={<Project />} />
      <Route path="/project/whoiam" element={<WhoIAM />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
}
