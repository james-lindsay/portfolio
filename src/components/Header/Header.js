import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__list">
        <li className="navbar__item">
          <Link to="/" className="navbar__link">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/Projects" className="navbar__link">
            Portfolio
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/CV" className="navbar__link">
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
