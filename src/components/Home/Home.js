import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Welcome to My Portfolio</h1>
        <p>Explore my projects and get in touch!</p>
        <Link to="/projects" className="btn">
          View Projects
        </Link>
      </div>
    </section>
  );
};

export default Home;
