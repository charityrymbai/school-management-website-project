import React from 'react';
import StudentRoutes from '../Routes/StudentRoutes.jsx';

import { SidebarItem } from '../components/Sidebar.jsx';
const Sidebar = React.lazy(() => import('../components/Sidebar.jsx'));
import {
    Layers,
    BookCopy,
    Wallet,
    BookOpenCheck,
    PersonStanding,
} from 'lucide-react';

const StudentSideBarItems = () => {
    return (
        <>
            <Sidebar>
                <SidebarItem
                    goToPage="student/overview"
                    icon={<Layers size={20} />}
                    text="Overview"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/library"
                    icon={<BookCopy size={20} />}
                    text="Library"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/grades"
                    icon={<BookOpenCheck size={20} />}
                    text="Grades"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/attendance"
                    icon={<PersonStanding size={20} />}
                    text="Attendance"
                ></SidebarItem>
                <SidebarItem
                    goToPage="student/fees"
                    icon={<Wallet size={20} />}
                    text="Fees"
                ></SidebarItem>
            </Sidebar>
            <StudentRoutes />
        </>
    );
};

export default StudentSideBarItems;
