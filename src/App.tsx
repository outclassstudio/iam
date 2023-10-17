import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Main from "./pages/main/Main";
import Project from "./pages/project/Project";
import Teams from "./pages/teams/Teams";
import Terms from "./pages/policy/Terms";
import Policy from "./pages/policy/Policy";
import { GlobalStyle } from "./style/global.style";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms/terms" element={<Terms/>} />
        <Route path="/terms/policy" element={<Policy/>} />
      </Routes>
    </Router>
  );
}

export default App;
