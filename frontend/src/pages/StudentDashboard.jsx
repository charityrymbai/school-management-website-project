import React from 'react';
const RoutesWithSidePanel = React.lazy(()=>import('../Routes/RoutesWithSidePanel.jsx'));

import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import("../components/Sidebar.jsx"))
import {
    Layers,
    BookCopy,
    Wallet,
    BookOpenCheck,
    PersonStanding,
} from 'lucide-react';

const StudentDashboard = () => {
    return (
        <div className="flex">
            <Sidebar>
                <SidebarItem
                    goToPage="overview"
                    icon={<Layers size={20} />}
                    text="Overview"
                ></SidebarItem>
                <SidebarItem
                    goToPage="Library"
                    icon={<BookCopy size={20} />}
                    text="Library"
                ></SidebarItem>
                <SidebarItem
                    goToPage="Grades"
                    icon={<BookOpenCheck size={20} />}
                    text="Grades"
                ></SidebarItem>
                <SidebarItem
                    goToPage="Attendance"
                    icon={<PersonStanding size={20} />}
                    text="Attendance"
                ></SidebarItem>
                <SidebarItem
                    goToPage="Fees"
                    icon={<Wallet size={20} />}
                    text="Fees"
                ></SidebarItem>
            </Sidebar>
            <RoutesWithSidePanel />
        </div>
    );
};

export default StudentDashboard;
