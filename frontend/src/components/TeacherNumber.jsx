import PropTypes from "prop-types"
import { CardWrapper1 } from '../Wrappers/CardWrapper';
const TeacherNumber = ({teacherNo}) => {
    return (
        <div>
            <CardWrapper1 heading="">
                Number of Teachers: {teacherNo ? teacherNo : "NA"}                    
            </CardWrapper1>
        </div>
    );
};

TeacherNumber.propTypes = {
    teacherNo: PropTypes.number,
}

export default TeacherNumber;
