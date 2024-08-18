import React from 'react';
import { useParams } from 'react-router-dom';
const StudentSideBarItems = React.lazy(
     () => import('../components/StudentSidebarItems')
);
const AdminSideBarItems = React.lazy(
     () => import('../components/AdminSideBarItems')
);
const TeacherSideBarItems = React.lazy(
     () => import('../components/TeacherSideBarItems')
);

const Dashboard = () => {
     const params = useParams();
     let content;

     if (params.user.toLowerCase() === 'student') {
          content = <StudentSideBarItems />;
     } else if (params.user.toLowerCase() === 'teacher') {
          content = <TeacherSideBarItems />;
     } else if (params.user.toLowerCase() === 'admin') {
          content = <AdminSideBarItems />;
     }
     return <div className="flex">{content}</div>;
};

export default Dashboard;
