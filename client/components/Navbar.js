import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <img src="https://i.postimg.cc/8CT6Kj1Q/banner.png" />

    <nav id="navbar">
      {isLoggedIn ? (
        <div class="navContainer">
          {/* The navbar will show these links after you log in */}
          <Link to="/" class="link">
            Home
          </Link>
          <Link to="/products" class="link">
            All
          </Link>
          <Link to="/products/face" class="link">
            Face
          </Link>
          <Link to="/products/eye" class="link">
            Eye
          </Link>
          <Link to="/products/lip" class="link">
            Lip
          </Link>
          <Link to="/products/nail" class="link">
            Nail
          </Link>
          <Link to="/logout" class="link" onClick={handleClick}>
            Log Out
          </Link>
          <Link to="/cart" class="link">
            Cart
          </Link>
          {isAdmin && <Link to="/login/admin">🛠️ Admin</Link>}
        </div>
      ) : (
        <div class="navContainer">
          {/* The navbar will show these links after you log out */}
          <Link to="/" class="link">
            Home
          </Link>
          <Link to="/products" class="link">
            All
          </Link>
          <Link to="/products/face" class="link">
            Face
          </Link>
          <Link to="/products/eye" class="link">
            Eye
          </Link>
          <Link to="/products/lip" class="link">
            Lip
          </Link>
          <Link to="/products/nail" class="link">
            Nail
          </Link>
          <Link to="/login" class="link">
            Login
          </Link>
          <Link to="/signup" class="link">
            Sign Up
          </Link>
          <Link to="/cart/${userId}" class="link">
            Cart
          </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.userType == "admin",
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
