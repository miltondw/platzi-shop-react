import PropTypes from "prop-types";

const Layout = ({ children }) => {
  Layout.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return <div className="flex flex-col items-center  mt-10 lg:mt-20 min-w-80">{children}</div>;
};
export default Layout;
