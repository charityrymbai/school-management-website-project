import { CardWrapper3 } from '../Wrappers/CardWrapper';
import { cardNormal } from '../responsive-styles-for-elements/tailwind-styles-exports';

const GradesCard = ({ gpa }) => {
    return (
        <CardWrapper3 heading="Grades">
            <div className={'grid place-content-center h-full ' + cardNormal}>
                <h5>Current GPA: {gpa}</h5>
            </div>
        </CardWrapper3>
    );
};

export default GradesCard;
