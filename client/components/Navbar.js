import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <h1>Grace Cosmetics</h1>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/">Home</Link>
          <Link to="/products">All</Link>
          <Link to="/products/face">Face</Link>
          <Link to="/products/eye">Eye</Link>
          <Link to="/products/lip">Lip</Link>
          <Link to="/products/nail">Nail</Link>
          <Link to="/logout">Log Out</Link>
          <Link to="/cart">Cart</Link>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/">Home</Link>
          <Link to="/products">🛍️ All</Link>
          <Link to="/products/face">🧴 Face</Link>
          <Link to="/products/eye">👁️ Eye</Link>
          <Link to="/products/lip">🫦 Lip</Link>
          <Link to="/products/nail">💅🏻 Nail</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/cart/${userId}">🛒 Cart</Link>
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
