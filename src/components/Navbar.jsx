import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as IconArrowDown } from "../assets/icon-arrow-down.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar--section--left">
        <Logo />
        <p>
          Feautures
          <IconArrowDown />
        </p>
        <p>
          Company
          <IconArrowDown />
        </p>
        <p>Careers</p>
        <p>About</p>
      </div>
      <div className="navbar--section--right">
        <p>Login</p>
        <p>Register</p>
      </div>
    </nav>
  );
}
