import PropTypes from 'prop-types';
import { h1Style } from '../responsive-styles-for-elements/tailwind-styles-exports';

const TopBar2 = ({ Heading }) => {
    return (
        <div className="w-full border-b-2 h-fit p-10 flex items-center flex-col sm:flex-row sm:justify-between">
            <div className="font-poppins pb-6 sm:pb-0">
                <h1 className={h1Style}>{Heading}</h1>
            </div>
        </div>
    );
};

TopBar2.propTypes = {
    Heading: PropTypes.string.isRequired,
};

export default TopBar2;
