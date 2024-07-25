import React from 'react';
import AdminRoutes from '../Routes/AdminRoutes.jsx';

import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));
import {
    Wallet
} from 'lucide-react';

const TeacherSideBarItems = ()=>{
    return (
        <>
            <Sidebar>
                <SidebarItem
                    goToPage=""
                    icon={<Wallet size={20} />}
                    text=""
                ></SidebarItem>
            </Sidebar>
            {/* <AdminRoutes /> */}
        </>
    )
}

export default TeacherSideBarItems