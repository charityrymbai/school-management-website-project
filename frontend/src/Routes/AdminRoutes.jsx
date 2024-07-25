import { Route, Routes, Navigate } from 'react-router-dom';
import Student from '../pages/admin/Student';
import Teacher from '../pages/admin/Teacher'


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
