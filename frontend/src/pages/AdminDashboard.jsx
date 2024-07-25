import React from 'react';
const AdminRoutes = React.lazy(
    () => import('../Routes/AdminRoutes'),
);

import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));
import {Wallet} from 'lucide-react';

const AdminDashboard = () => {
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem
                    goToPage="admin/student"
                    icon={<Wallet size={20} />}
                    text="Students"
                ></SidebarItem>
                <SidebarItem
                    goToPage="admin/teacher"
                    icon={<Wallet size={20} />}
                    text="Teachers"
                ></SidebarItem>
            </Sidebar>
            <AdminRoutes />
        </div>
    );
};

export default AdminDashboard;
