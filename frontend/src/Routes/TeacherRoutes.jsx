import { Route, Routes, Navigate } from 'react-router-dom';
import Test from '../pages/teacher/Test';

const TeacherRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="" element={<Navigate to="test" />} />
                <Route path="test" element={<Test />} />
            </Routes>
        </>
    );
};

export default TeacherRoutes;
