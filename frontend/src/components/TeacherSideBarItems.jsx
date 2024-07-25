import React from 'react';
import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));
import { Wallet } from 'lucide-react';
import TeacherRoutes from '../Routes/TeacherRoutes.jsx';

const TeacherSideBarItems = () => {
    return (
        <>
            <Sidebar>
                <SidebarItem
                    goToPage="test"
                    icon={<Wallet size={20} />}
                    text="Test"
                ></SidebarItem>
            </Sidebar>
            <TeacherRoutes />
        </>
    );
};

export default TeacherSideBarItems;
