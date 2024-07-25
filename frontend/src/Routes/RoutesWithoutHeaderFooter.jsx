import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AdminDashboard from '../pages/AdminDashboard';

const StudentDashboard = React.lazy(() => import('../pages/StudentDashboard'));
const TeacherDashboard = React.lazy(() => import('../pages/TeacherDashboard'));

const RoutesWithoutHeaderFooter = () => {
    return (
        <>
            <Routes>
                <Route path="student/*" element={<StudentDashboard />} />
                <Route path="teacher/*" element={<TeacherDashboard />} />
                <Route path="admin/*" element={<AdminDashboard />} />
            </Routes>
        </>
    );
};
export default RoutesWithoutHeaderFooter;
