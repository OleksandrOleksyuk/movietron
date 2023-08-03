import PropTypes from "prop-types";

Main.propTypes = {
  children: PropTypes.any,
};

function Main({ children }) {
  return <main className="main">{children}</main>;
}

export default Main;
