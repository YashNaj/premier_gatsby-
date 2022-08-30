import "./navbar.scss";
import logo from "../../images/text249.png";
import React, { useEffect, useState } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import "../../styles/Styles.scss";
const Menu = () => (
  <>
    <p>
      <button href="#welcome" className = 'navButtons'   onClick={() => window.fullpage_api.moveTo(1)}>
        Welcome
      </button>
    </p>
    <p>
      <button className="navButtons" onClick={() => window.fullpage_api.moveTo(2)}>
        About
      </button>
    </p>
    <p>
    <button className = 'navButtons' onClick = {() => window.fullpage_api.moveTo(3)}>More Info</button>
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
    <div className={scroll ? "pps__navbar pps__background" : "pps__navbar"}>
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
