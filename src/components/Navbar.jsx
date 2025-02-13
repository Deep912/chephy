import React from "react";
import logo from "../images/chef.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav-container">
          <img src={logo} />
          <span>Chephy</span>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
