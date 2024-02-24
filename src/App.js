import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import ProjectPage from "./components/ProjectsPage/ProjectsPage";
import Auth from "./Images/SS-Auth.png";
import Reg from "./Images/SS-Regpage.png";
import User from "./Images/SS-UserPage.png";
import UserDark from "./Images/SS-UserPage.png";
import HomePage from "./Images/SS-Home.png";
import HomeDark from "./Images/SS-HomeDark.png";
import Login from "./Images/SS-Login.png";

function App() {
  const projects = [
    {
      id: 1,
      title: "Social Circle",
      description: "Social Media App that uses React, NodeJS and MongoDB",
      image_auth: `${Auth}`,
      image_reg: `${Reg}`,
      image_user: `${User}`,
      image_userDark: `${UserDark}`,
      image_home: `${HomePage}`,
      image_homeDark: `${HomeDark}`,
      image_login: `${Login}`,
    },
    {
      id: 2,
      title: "Travel Site",
      description: "Travel Website made using HTML & CSS",
    },
    {
      id: 3,
      title: "InStock",
      description:
        "Stock Website for warehouses, made as a team using React, nodeJS, MySQL",
    },
    {
      id: 4,
      title: "Band Site",
      description:
        "Website made using HTML, Sass and Java Script. Website is used to see upcoming dates for the bands tour dates",
    },
  ];
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects projects={projects} />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/projects/:id"
            element={<ProjectPage projects={projects} />}
          />
        </Routes>
        <Contact />
      </div>
    </Router>
  );
}

export default App;
