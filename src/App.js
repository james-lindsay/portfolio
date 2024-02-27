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
import UserDark from "./Images/SS-UserPageDark.png";
import HomePage from "./Images/SS-Home.png";
import HomeDark from "./Images/SS-HomeDark.png";
import Login from "./Images/SS-Login.png";
import Warehouse from "./Images/IS-Warehouses.png";
import WarehouseEdit from "./Images/IS-EditWarehouse.png";
import WarehouseStock from "./Images/IS-WarehouseStock.png";
import Inventory from "./Images/IS-Inventory.png";
import InventoryAdd from "./Images/IS-InventoryAdd.png";
import InventoryEdit from "./Images/IS-InventoryEdit.png";
import InventoryStock from "./Images/IS-InventoryStock.png";
import BSHome from "./Images/BS-Home.png";
import BSHome2 from "./Images/BS-Home2.png";
import BSComments from "./Images/BS-Comments.png";
import BSFooter from "./Images/BS-Footer.png";
import BSShows from "./Images/BS-Shows.png";
import BSAbout from "./Images/BS-About.png";
import BSGallary from "./Images/BS-Gallary.png";

function App() {
  const projects = [
    {
      id: 1,
      title: "Social Circle",
      description:
        "The social media app is a modern platform powered by React, Node.js, and MongoDB. Users can securely register, log in, and interact with dynamic content including posts, images, and videos. Features include real-time messaging, personalized feeds, community building, and analytics insights. The app prioritizes scalability, performance, and user engagement, fostering connections and collaboration in a vibrant online community.",
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
      description:
        "The travel website, built with HTML and CSS, offers an immersive platform for travelers to explore destinations and plan itineraries, made during 12-week bootcamp.",
    },
    {
      id: 3,
      title: "InStock",
      description:
        "The stock website for warehouses, built with React, Node.js, and MySQL, streamlines inventory management with features for tracking, order processing, and supplier management. It offers robust reporting, automation, and integration capabilities, ensuring security, scalability, and performance. The website empowers warehouse managers to optimize operations, improve efficiency, and drive productivity in today's dynamic business landscape. Made during 12-week Bootcamp.",
      image_Warehouse: `${Warehouse}`,
      image_WarehouseEdit: `${WarehouseEdit}`,
      image_WarehouseStock: `${WarehouseStock}`,
      image_Inventory: `${Inventory}`,
      image_InventoryAdd: `${InventoryAdd}`,
      image_InventoryEdit: `${InventoryEdit}`,
      image_InventoryStock: `${InventoryStock}`,
    },
    {
      id: 4,
      title: "Band Site",
      description:
        "Crafted during a 12-week bootcamp, this website harnesses the power of HTML, Sass, JavaScript, and REST APIs to provide users with a convenient platform to explore upcoming tour dates for various bands. Seamlessly integrating with REST APIs, the website delivers timely and relevant information, offering an engaging experience for music enthusiasts eager to stay updated on their favorite bands' performances.",
      image_Home: `${BSHome}`,
      image_Home2: `${BSHome2}`,
      image_Gallary: `${BSGallary}`,
      image_About: `${BSAbout}`,
      image_Shows: `${BSShows}`,
      image_Footer: `${BSFooter}`,
      image_Comments: `${BSComments}`,
    },
    {
      id: 5,
      title: "Temp Plus",
      description:
        "Built with React, SASS, and Node.js, this project is a specialized job board exclusively designed for the construction industry. It enables users to post, search, and apply for construction-related job listings. The platform offers a seamless user experience with dynamic features tailored to meet the specific needs of the construction sector.",
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
