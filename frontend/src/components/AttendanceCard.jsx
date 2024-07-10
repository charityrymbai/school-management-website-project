import CircleChart from "../components/CircleChart"

import { CardWrapper3 } from "../Wrappers/CardWrapper"
import { cardNormal } from "../responsive-styles-for-elements/tailwind-styles-exports"

const AttendanceCard = ({attended, missed}) => {
    return (
        <div>
            <CardWrapper3 heading="Attendance">
                <div className="flex items-center justify-center">
                    <div>
                        <div className={cardNormal}>
                            <h5>Attended: {attended}</h5>
                            <h5>Missed: {missed}</h5>
                        </div>
                    </div>
                    <CircleChart
                        ValueArr={[
                            {value: attended, itemStyle: {color: "#1AA7EC"}},
                            {value: missed, itemStyle: {color: "#FFA500"}}
                        ]}
                        ></CircleChart>
                </div>
            </CardWrapper3>
        </div>
    )
}

export default AttendanceCard