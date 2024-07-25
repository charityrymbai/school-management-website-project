import PropTypes from 'prop-types';
import { CardWrapper3 } from '../Wrappers/CardWrapper';

const FeesCard = ({ lastPaymentDate }) => {
    return (
        <div>
            <CardWrapper3 heading="Fees">
                <div>
                    {lastPaymentDate
                        ? `Last Payment Date: ${new Date(lastPaymentDate).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                        : 'No Payment Made'}
                </div>
            </CardWrapper3>
        </div>
    );
};

FeesCard.propTypes = {
    lastPaymentDate: PropTypes.string.isRequired,
};

export default FeesCard;
