import PropTypes from 'prop-types';

const Heading1 = ({ children }) => {
    return (
        <>
            <div className="text-2xl font-semibold text-center">{children}</div>
        </>
    );
};

Heading1.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Heading1;
