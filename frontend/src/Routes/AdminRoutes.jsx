import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const SearchTeacher = React.lazy(() => import('../pages/admin/SearchTeacher'));
const SearchStudent = React.lazy(() => import('../pages/admin/SearchStudent'));
const Overview = React.lazy(() => import('../pages/admin/Overview'));
const Student = React.lazy(() => import('../pages/admin/Student'));
const Teacher = React.lazy(() => import('../pages/admin/Teacher'));

const AdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to="overview" />} />
                <Route path="overview" element={<Overview />} />
                <Route path="searchStudent" element={<SearchStudent />} />
                <Route path="searchTeacher" element={<SearchTeacher />} />
                <Route path="student" element={<Student />} />
                <Route path="teacher" element={<Teacher />} />
            </Routes>
        </>
    );
};

export default AdminRoutes;
