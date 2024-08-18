import PropTypes from 'prop-types';

const Line = ({ thick }) => {
     return (
          <div className={`h-[${thick}px] bg-gray-500 rounded-full mb-4`}></div>
     );
};

Line.propTypes = {
     thick: PropTypes.number.isRequired,
};

export default Line;
