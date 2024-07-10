import { CardWrapper3 } from "../Wrappers/CardWrapper"

const FeesCard = () => {
    const lastPaymentDate = new Date(2024, 0, 12)
    const nextPaymentDate = new Date(2024, 5, 12)
    return (
        <div>
            <CardWrapper3 heading="Fees">
            <ul className="list-disc">
                <li>Last Payment Date: {lastPaymentDate.toLocaleDateString()}</li>
                <li>Next Payment Date: {nextPaymentDate.toLocaleDateString()}</li>
            </ul>
            </CardWrapper3>
        </div>
    )
}

export default FeesCard