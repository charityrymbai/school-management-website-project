import TopBar from "../components/TopBar.jsx" 
import AttendanceCard from "../components/AttendanceCard.jsx"
import GradesCard from "../components/GradesCard.jsx"
import LibraryCard from "../components/LibraryCard.jsx"
import FeesCard from "../components/FeesCard.jsx"
import { CircleUserRound } from "lucide-react"
import { Link } from "react-router-dom"

const Overview = () => {
    return (
        <div className="w-full">
            <TopBar>
                <div className="font-taviraj">
                    <h1
                        className="text-5xl leading-relaxed"
                        >DashBoard</h1>
                    <h5>Welcome, Student</h5>
                </div>
                <div>
                    <CircleUserRound strokeWidth={1} size={100}></CircleUserRound>
                </div>
            </TopBar>
            <div className="p-5 bg-gray-50 grid grid-cols-2 gap-5">
                <Link to={"../attendance"}><AttendanceCard attended={56} missed={12}/></Link>
                <Link to={"../grades"}><GradesCard gpa={7.98}/></Link>
                <Link to={"../library"}><LibraryCard /></Link>
                <Link to={"../fees"}><FeesCard /></Link>
            </div>
        </div> 
    )
}

export default Overview

