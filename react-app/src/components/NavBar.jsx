import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../assets/logo.svg";

function NavBar() {
  return (
    <nav className="nav-bar">
      <Logo />
      <NavLinks />
    </nav>
  );
}

function Logo() {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="TAISHOW Logo" />
    </Link>
  );
}

function NavLinks() {
  return (
    <ul className="nav-options">
      <li>
        <Link className="nav-link" to="/overview">
          電影資訊
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/reviews">
          電影評論
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/cinemas">
          影城資訊
        </Link>
      </li>
      <li>
        <Link className="nav-link" to="/member">
          會員中心
        </Link>
      </li>
    </ul>
  );
}

export default NavBar;
