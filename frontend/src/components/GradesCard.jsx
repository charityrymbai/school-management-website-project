import { CardWrapper3 } from '../Wrappers/CardWrapper';

const GradesCard = ({ gpa }) => {
    return (
        <CardWrapper3 heading="Grades">
            <div className={'grid place-content-center h-full'}>
                <h5>Current GPA: {gpa}</h5>
            </div>
        </CardWrapper3>
    );
};

export default GradesCard;
