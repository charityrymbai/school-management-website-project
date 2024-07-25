import { Route, Routes, Navigate } from 'react-router-dom';

import Overview from '../pages/student/Overview';
import Library from '../pages/student/Library';
import Grades from '../pages/student/Grades';
import Attendance from '../pages/student/Attendance';
import Fees from '../pages/student/Fees';

const StudentRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to="overview" />} />
                <Route path="overview" element={<Overview />} />
                <Route path="library" element={<Library />} />
                <Route path="grades" element={<Grades />} />
                <Route path="attendance" element={<Attendance />} />
                <Route path="fees" element={<Fees />} />
            </Routes>
        </>
    );
};

export default StudentRoutes;
