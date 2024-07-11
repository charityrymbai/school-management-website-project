import AttendanceCard from "../components/AttendanceCard.jsx"
import GradesCard from "../components/GradesCard.jsx"
import LibraryCard from "../components/LibraryCard.jsx"
import FeesCard from "../components/FeesCard.jsx"
import { CircleUserRound } from "lucide-react"
import { Link } from "react-router-dom"

const Overview = () => {
    return (
        <div className="w-full">
            <div className="border-b-2 h-fit p-10 flex items-center flex-col sm:flex-row sm:justify-between">
                <div className="font-taviraj pb-6 sm:pb-0">
                    <h1
                        className="text-5xl leading-relaxed"
                        >DashBoard</h1>
                    <h5>Welcome, Student</h5>
                </div>
                <div>
                    <CircleUserRound strokeWidth={1} size={100}></CircleUserRound>
                </div>
            </div>
            <div className="p-5 bg-gray-50 grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Link to={"../attendance"}><AttendanceCard attended={56} missed={12}/></Link>
                <Link to={"../grades"}><GradesCard gpa={7.98}/></Link>
                <Link to={"../library"}><LibraryCard /></Link>
                <Link to={"../fees"}><FeesCard /></Link>
            </div>
        </div>
    )
}

export default Overview

