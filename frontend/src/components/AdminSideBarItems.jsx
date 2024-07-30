import React from 'react';
const AdminRoutes = React.lazy(() => import('../Routes/AdminRoutes.jsx'));

import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));
import { Baby, Layers, PersonStanding, Search } from 'lucide-react';

const AdminSideBarItems = () => {
    return (
        <>
            <Sidebar>
                <SidebarItem
                    goToPage="admin/overview"
                    icon={<Layers size={20} />}
                    text="Overview"
                ></SidebarItem>
                <SidebarItem
                    goToPage="admin/searchStudent"
                    icon={<Search size={20} />}
                    text="Search Student"
                ></SidebarItem>
                <SidebarItem
                    goToPage="admin/searchTeacher"
                    icon={<Search size={20} />}
                    text="Search Teacher"
                ></SidebarItem>
                <SidebarItem
                    goToPage="admin/student"
                    icon={<Baby size={20} />}
                    text="Student"
                ></SidebarItem>
                <SidebarItem
                    goToPage="admin/teacher"
                    icon={<PersonStanding size={20} />}
                    text="Teacher"
                ></SidebarItem>
            </Sidebar>
            <AdminRoutes />
        </>
    );
};

export default AdminSideBarItems;
