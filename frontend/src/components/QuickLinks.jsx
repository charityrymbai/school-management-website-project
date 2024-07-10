import { cardNormal, cardHeading } from "./../responsive-styles-for-elements/tailwind-styles-exports"

import {useNavigate, Link} from 'react-router-dom'
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
                <div className={"w-full h-fit grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 "+ cardNormal}>
                    <Link to={"login/Teacher"}>Teacher's Login</Link>
                    <Link to={"login/Student"}>Student's Login</Link>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks