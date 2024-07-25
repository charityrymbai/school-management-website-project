import React from 'react';
import { useParams } from 'react-router-dom';
import StudentSideBarItems from '../components/StudentSidebarItems';
import AdminSideBarItems from '../components/AdminSideBarItems';

const Dashboard = () => {
    const params = useParams();
    let content;

    if (params.user.toLowerCase() === 'student') {
        content = <StudentSideBarItems />;
    } else if (params.user.toLowerCase() === 'teacher') {
        content = <div>Teacher</div>;
    } else if (params.user.toLowerCase() === 'admin') {
        content = <AdminSideBarItems />;
    }
    return <div className="flex">{content}</div>;
};

export default Dashboard;
