import React, { useContext } from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const { user, logOut } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <div className="header">
      <img src={logo} alt="" />
      <div className="ul-container">
        <Link to="/">Shop</Link>
        <Link to="/order">Order</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {user && (
          <span className="text-white">
            {user.email}{" "}
            <button
              className="btn ml-5 hover:text-white text-black bg-white -btn-primary"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          </span>
        )}
      </div>
    </div>
  );
};

export default Header;
