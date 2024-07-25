import PropTypes from 'prop-types';

const TextLink = ({ children, href }) => {
    return (
        <>
            <a className="py-4 text-indigo-700" href={href}>
                {children}
            </a>
        </>
    );
};

TextLink.propTypes = {
    children: PropTypes.node.isRequired,
    href: PropTypes.string.isRequired,
};

export default TextLink;
