import "./Home.scss";

function HomePage() {
  return (
    <div className="HomePage">
      <header>
        <h1>James Lindsay Portfolio</h1>
        <p>Welcome to my portfolio! I'm a passionate developer.</p>
      </header>
      <main>
        <section className="about-me">
          <h2>About Me</h2>
          <p>
            I'm a frontend developer based in London. I love creating beautiful
            and functional web applications.
          </p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML5</li>
            <li>CSS3 / Sass</li>
            <li>JavaScript (ES6+)</li>
            <li>React.js</li>
            <li>Responsive Web Design</li>
            <li>NodeJs</li>
            <li>MongoDB</li>
          </ul>
        </section>
        <section className="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Travel Site</h3>
            <p>Travel Site made during bootcamp</p>
          </div>
          <div className="project">
            <h3>Band Site</h3>
            <p>Band website created during bootcamp</p>
          </div>
        </section>
        <section className="contact">
          <h2>Contact Me</h2>
          <p>
            Feel free to reach out to me at{" "}
            <a href="mailto:jameslindsay2220@gmail.com">
              Jameslindsay2220@gmail.com
            </a>
            .
          </p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 James Lindsay</p>
      </footer>
    </div>
  );
}

export default HomePage;
