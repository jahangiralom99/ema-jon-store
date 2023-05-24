import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { logOut } = useContext(AuthContext);

  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="ul-container">
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {}
      </div>
    </div>
  );
};

export default Header;
