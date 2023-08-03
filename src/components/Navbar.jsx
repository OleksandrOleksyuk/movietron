import PropTypes from "prop-types";

Navbar.propTypes = {
  children: PropTypes.any,
};

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>Movietron</h1>
    </div>
  );
}

export default Navbar;
