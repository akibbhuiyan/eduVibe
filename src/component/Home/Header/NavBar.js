import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaSearch } from "react-icons/fa";
import { RiUserLine, RiLogoutBoxLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DarkModeToggle from "react-dark-mode-toggle";
import logo from "../../../assets/images/logo.png";
import "./NavBar.css";
import { useContext } from "react";
import { reload } from "firebase/auth";
import { AuthContext } from "../../Context/UserContext";
function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  const [isDarkMode, setIsDarkMode] = useState(() => false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setactive] = useState(false);
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }

    const onScrolled = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", onScrolled);
    return () => window.removeEventListener("scroll", onScrolled);
  }, [isDarkMode]);

  return (
    <Navbar
      expand="lg"
      className={isScrolled ? "edu_header scrolled" : "edu_header"}
    >
      <Container className="d-flex justify-content-between">
        <Link to="/home" className="navbar-brand">
          <img src={logo} alt="Logo" />
        </Link>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className=" order-2 order-xl-1 popup-mobile"
        >
          <Nav className="">
            <Link className="nav-link" to="/home">
              Home
            </Link>
            <Link className="nav-link" to="/about">
              About
            </Link>
            <Link className="nav-link" to="/courses">
              Courses
            </Link>
            <Link className="nav-link" to="/blog">
              Blog
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/faq">
              Faq
            </Link>
          </Nav>
        </Navbar.Collapse>
        <div className="header-menubar d-flex align-items-center  order-1 order-xl-2">
          <div className="switch" id="home">
            <DarkModeToggle
              onChange={setIsDarkMode}
              checked={isDarkMode}
              size={50}
            />
          </div>
          <div className="search-option">
            {" "}
            <button
              className="qoute-search qoute-icon"
              onClick={() => setactive(!active)}
            >
              <FaSearch />
            </button>
            {active && (
              <div className="search-box">
                <input type="text" name="search" placeholder="Search Here..." />
              </div>
            )}
          </div>
          {user?.uid ? (
            <>
              <div className="qoute-user qoute-icon d-none d-md-block">
                <a href="#" onClick={logOut}>
                  <RiLogoutBoxLine />
                  {user.displayName}
                </a>
              </div>
              <div className="qoute-user qoute-icon d-block d-md-none">
                <Link to="/login">
                  <RiLogoutBoxLine />
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="qoute-user qoute-icon d-none d-md-block">
                <Link to="/login">
                  <RiUserLine />
                  Login/Register
                </Link>
              </div>
              <div className="qoute-user qoute-icon d-block d-md-none">
                <Link to="/login">
                  <RiUserLine />
                </Link>
              </div>
            </>
          )}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="ms-5 qoute-icon"
          />
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;
