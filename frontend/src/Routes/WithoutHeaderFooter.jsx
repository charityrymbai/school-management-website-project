import { Routes, Route }from 'react-router-dom'

import StudentDashboard from "../pages/StudentDashboard"
import TeacherDashboard from '../pages/TeacherDashboard'

const WithoutHeaderFooter = () => {
    return <>
        <Routes>
            <Route path="student" element={<StudentDashboard />} />
            <Route path="teacher" element={<TeacherDashboard />} />
        </Routes>
    </>
}
export default WithoutHeaderFooter