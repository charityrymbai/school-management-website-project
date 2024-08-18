import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

const Overview = React.lazy(() => import('../pages/student/Overview'));
const Library = React.lazy(() => import('../pages/student/Library'));
const Grades = React.lazy(() => import('../pages/student/Grades'));
const Attendance = React.lazy(() => import('../pages/student/Attendance'));
const Fees = React.lazy(() => import('../pages/student/Fees'));

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
