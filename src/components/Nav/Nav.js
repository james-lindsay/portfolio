import "./Nav.scss";

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Home
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            About Me
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            CV
          </a>
        </li>
        <li className="navbar__item">
          <a href="#" className="navbar__link">
            Portfolio
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
