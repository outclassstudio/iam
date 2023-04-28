import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/about/About";
import Main from "./pages/main/Main";
import { GlobalStyle } from "./style/global.style";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
