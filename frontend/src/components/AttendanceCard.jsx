import CircleChart from "../components/CircleChart"

import { CardWrapper3 } from "../Wrappers/CardWrapper"
import { cardNormal } from "../responsive-styles-for-elements/tailwind-styles-exports"

const AttendanceCard = ({attendance}) => {
    if (attendance.length>0){
        const attendanceStats = attendance.reduce((stats, record) => {
            if (record.present) {
                stats.attended++;
            } else {
                stats.missed++;
            }
            return stats;
        }, { attended: 0, missed: 0 });
    }
    return (
        <div>
            <CardWrapper3 heading="Attendance">
               {
                     (attendance.length>0)?
                        (<div className="flex items-center justify-center">
                            <div>
                                <div className={cardNormal}>
                                    <h5>Attended: {attendanceStats.attended}</h5>
                                    <h5>Missed: {attendanceStats.missed}</h5>
                                </div>
                            </div>
                            <CircleChart
                                ValueArr={[
                                    {value: attendanceStats.attended, itemStyle: {color: "#1AA7EC"}},
                                    {value: attendanceStats.missed, itemStyle: {color: "#FFA500"}}
                                ]}
                                ></CircleChart>
                        </div>)
                    :
                        ("No Attendance Records") 
                }
            </CardWrapper3>
        </div>
    )
}

export default AttendanceCard