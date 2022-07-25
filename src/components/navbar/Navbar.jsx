import "./navbar.scss";
import logo from "../../images/text249.png";
import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
const Menu = () => (
  <>
    <p>
      <a href="#welcome">Welcome</a>
    </p>
    <p>
      <a href="#about" className="anchorAbout">
        About
      </a>
    </p>
    <p>
      <a href="#moreinfo">More Info</a>
    </p>
  </>
);
const Navbar = () => {
  const [scroll, setScroll] = useState(false);

  const [toggleMenu, setToggleMenu] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
  }, []);
  return (
    <div className={scroll ? "pps__navbar pps__background":"pps__navbar"}
    >
      <div className="pps__navbar-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="desktop-menu">
        <Menu />
      </div>
      <div className="line-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="white"
            size={40}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="white"
            size={40}
              onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="pps__navbar-menu-container slide-in-right">
            <div className="pps__navbar-menu-container-links slide-in-right">
              <Menu />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;