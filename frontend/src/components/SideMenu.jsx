import { SidebarItem } from "./Sidebar"
import Sidebar from "./Sidebar"

import { Layers, BookCopy, Wallet, BookOpenCheck, PersonStanding } from "lucide-react"

const SideMenu = () =>{
    return <Sidebar>
            <SidebarItem goToPage="overview" icon={<Layers size={20} />} text="Overview"></SidebarItem>
            <SidebarItem goToPage="Library" icon={<BookCopy size={20} />} text="Library"></SidebarItem>
            <SidebarItem goToPage="Grades" icon={<BookOpenCheck size={20} />} text="Grades"></SidebarItem>
            <SidebarItem goToPage="Attendance" icon={<PersonStanding size={20} />} text="Attendance"></SidebarItem>
            <SidebarItem goToPage="Fees" icon={<Wallet size={20} />} text="Fees"></SidebarItem>
        </Sidebar>
}

export default SideMenu