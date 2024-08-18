import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
const Test = React.lazy(() => import('../pages/teacher/Test'));

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
