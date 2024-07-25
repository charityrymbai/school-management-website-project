import React from 'react';
import AdminRoutes from '../Routes/AdminRoutes.jsx';

import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));
import {
    Wallet
} from 'lucide-react';

const AdminSideBarItems = ()=>{
    return (
        <>
            <Sidebar>
                <SidebarItem
                    goToPage="admin/student"
                    icon={<Wallet size={20} />}
                    text="Student"
                ></SidebarItem>
            </Sidebar>
            <AdminRoutes />
        </>
    )
}

export default AdminSideBarItems