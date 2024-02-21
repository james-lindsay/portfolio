import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
// import ProjectDetails from "./components/ProjectDetails"; // Import the ProjectDetails component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/projects/:id" component={ProjectDetails} />{" "} */}
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
