import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to={"/"} className="text-2xl font-bold text-gradient">
        <p>RESUMIND</p>
      </Link>
      <Link to={"/upload"} className="primary-button w-fit">
        Upload Resume{" "}
      </Link>
    </nav>
  );
};

export default Navbar;
