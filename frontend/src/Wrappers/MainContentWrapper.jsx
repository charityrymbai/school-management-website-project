import PropTypes from 'prop-types';
const MainContentWrappper = ({ children }) => {
    return <div className="pt-[370px] bg-blue-100 p-4">{children}</div>;
};

MainContentWrappper.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainContentWrappper;
