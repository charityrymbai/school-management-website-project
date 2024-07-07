import { cardNormal, cardHeading } from "./../responsive-styles-for-elements/tailwind-styles-exports"

import {useNavigate} from 'react-router-dom'
import NavigatePageLink from "./NavigatePageLink"
import Line from "./Line"


const QuickLinks = ()=>{

    const navigate = useNavigate()

    return (
        <div className="text-center text-inter">
            <h1
                className={cardHeading}
            >Quick Links</h1>
            <Line thick={2}></Line>
            <div>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 "+ cardNormal}>
                    <NavigatePageLink gotopage="/Login/teacherLogin">Teacher's Login</NavigatePageLink>
                    <NavigatePageLink gotopage="/Login/studentLogin">Student's Login</NavigatePageLink>
                    <NavigatePageLink gotopage="#">Announcements</NavigatePageLink>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks