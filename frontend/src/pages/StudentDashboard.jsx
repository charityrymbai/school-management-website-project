import { Route, Routes } from "react-router-dom"
import SideMenu from "./../components/SideMenu"
import Overview from "./Overview"
import Library from "./Library"
import Grades from "./Grades"
import Attendance from "./Attendance"
import Fees from "./Fees"


import { Layers, BookCopy, Wallet, BookOpenCheck, PersonStanding } from "lucide-react"

const StudentDashboard = ()=>{
    return <div className="flex">
        <SideMenu />
        <Routes>
            <Route path="overview" element={<Overview />} />
            <Route path="library" element={<Library />} />
            <Route path="grades" element={<Grades />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="fees" element={<Fees />} />
        </Routes>
    </div>
}

export default StudentDashboard