import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Main from "./pages/main/Main";
import Teams from "./pages/teams/Teams";
import Terms from "./pages/policy/Terms";
import Policy from "./pages/policy/Policy";
import { GlobalStyle } from "./style/global.style";
import WhoIAM from "pages/project/tab/WhoIAM";
import Media from "pages/project/tab/Media";
import Answering from "pages/project/tab/Answering";
import History from "pages/project/tab/History";
import ProjectDetail from "pages/project/tab/ProjectDetail";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/project" element={<WhoIAM />} />
        <Route path="/project/whoiam" element={<WhoIAM />} />
        <Route path="/project/media" element={<Media />} />
        <Route path="/project/answering" element={<Answering />} />
        <Route path="/project/history" element={<History />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
