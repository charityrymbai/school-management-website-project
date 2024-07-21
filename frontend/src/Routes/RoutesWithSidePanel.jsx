import { Route, Routes, Navigate } from 'react-router-dom';

import Overview from '../pages/Overview';
import Library from '../pages/Library';
import Grades from '../pages/Grades';
import Attendance from '../pages/Attendance';
import Fees from '../pages/Fees';

const RoutesWithSidePanel = () => {
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

export default RoutesWithSidePanel;
