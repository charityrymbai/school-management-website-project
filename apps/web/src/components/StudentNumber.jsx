import PropTypes from 'prop-types';
import { CardWrapper1 } from '../Wrappers/CardWrapper';
const StudentNumber = ({ studentNo }) => {
     return (
          <div>
               <CardWrapper1 heading="">
                    Number of Students: {studentNo ? studentNo : 'NA'}
               </CardWrapper1>
          </div>
     );
};

StudentNumber.propTypes = {
     studentNo: PropTypes.number,
};

export default StudentNumber;
