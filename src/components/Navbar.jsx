import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav>
        <div className="logo">DeliciousEats</div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
          <NavLink
              to="/reservations/create-timeslot" // Link to the create-time slot form page
              className={({ isActive }) => (isActive ? "active-link" : "")}
              spy="true"
              smooth={true}
              duration={500}
            >
              RESERVATION
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active-link" : "")}
              spy={true}
              smooth={true}
              duration={500}
            >
              HOME
            </NavLink>
          </div>
          <button className="menuBtn">OUR MENU</button>
        </div>
        <div className="hamburger" onClick={()=> setShow(!show)}>
                <GiHamburgerMenu/>
        </div>
      </nav>
    </>
  );
};

export default Navbar