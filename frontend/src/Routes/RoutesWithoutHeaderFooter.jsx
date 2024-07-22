import React from 'react';
import { Routes, Route } from 'react-router-dom';

const StudentDashboard = React.lazy(() => import('../pages/StudentDashboard'));
const TeacherDashboard = React.lazy(() => import('../pages/TeacherDashboard'));

const RoutesWithoutHeaderFooter = () => {
    return (
        <>
            <Routes>
                <Route path="student/*" element={<StudentDashboard />} />
                <Route path="teacher/*" element={<TeacherDashboard />} />
            </Routes>
        </>
    );
};
export default RoutesWithoutHeaderFooter;
