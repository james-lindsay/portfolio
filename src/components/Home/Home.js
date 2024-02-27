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
        <p>
          "I am a dynamic and self-motivated software engineering enthusiast
          with a strong foundation acquired through intensive bootcamp training.
          Eager to embark on a fulfilling career in software engineering,
          leveraging proficiency in HTML, CSS, JavaScript, and REST APIs to
          drive innovation and contribute effectively to dynamic development
          teams. Seeking opportunities to apply acquired skills and knowledge in
          a professional setting, with a passion for continuous learning and
          immediate availability to contribute to impactful projects."
        </p>
      </div>
    </section>
  );
};

export default Home;
