import { cardNormal, cardHeading } from "./../responsive-styles-for-elements/tailwind-styles-exports"

import { Link } from 'react-router-dom'
import Line from "./Line"
import { CardWrapper1 } from "../Wrappers/CardWrapper"

const QuickLinks = ()=>{

    return (
        <div>
            <CardWrapper1>
                <div className="text-left text-inter hover:text-[#990011]">
                    <h1
                        className={cardHeading}
                    >Quick Links</h1>
                    <Line thick={2}></Line>
                    <div>
                        <div className={"w-full h-fit grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-1 gap-2 "+ cardNormal}>
                            <ul className="list-disc list-inside">
                                <li className="hover:text-[#14532e]"><Link to={"../login/Teacher"}>Teacher's Login</Link></li>
                                <li className="hover:text-[#14532e]"><Link to={"../login/Student "}>Student's Login</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </CardWrapper1>
        </div>
    )
}

export default QuickLinks