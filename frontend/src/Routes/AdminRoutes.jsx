import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const Student = React.lazy(() => import('../pages/admin/Student'));
const Teacher = React.lazy(() => import('../pages/admin/Teacher'));

const AdminRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to="student" />} />
                <Route path="student" element={<Student />} />
                <Route path="teacher" element={<Teacher />} />
            </Routes>
        </>
    );
};

export default AdminRoutes;
