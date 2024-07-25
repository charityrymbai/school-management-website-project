import React from 'react';
const StudentRoutes = React.lazy(
    () => import('../Routes/StudentRoutes.jsx'),
);

import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));
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
                    goToPage="student/overview"
                    icon={<Layers size={20} />}
                    text="Overview"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/Library"
                    icon={<BookCopy size={20} />}
                    text="Library"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/Grades"
                    icon={<BookOpenCheck size={20} />}
                    text="Grades"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/Attendance"
                    icon={<PersonStanding size={20} />}
                    text="Attendance"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/Fees"
                    icon={<Wallet size={20} />}
                    text="Fees"
                ></SidebarItem>
            </Sidebar>
            <StudentRoutes />
        </div>
    );
};

export default StudentDashboard;
