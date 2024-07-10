
import { CardWrapper1 } from "../Wrappers/CardWrapper"
import { cardNormal, cardHeading } from "./../responsive-styles-for-elements/tailwind-styles-exports"

import Line from "./Line"

const Announcements = () => {
    return (
        <CardWrapper1>
        <div className="text-center text-inter">
            <h1
                className={cardHeading}
            >Announcements</h1>
            <Line thick={2}></Line>
            <div >
                <ul className={"list-disc list-inside "+cardNormal}>
                    <li>One thing</li>
                    <li>Two thing</li>
                </ul>
            </div>
        </div>
        </CardWrapper1>
    )
}

export default Announcements