import { cardNormal, cardHeading } from "../pages/Styles/tailwind-styles"

const QuickLinks = ()=>{
    return (
        <div className="w-full h-fit p-2 text-center text-inter">
            <h1
                className={cardHeading}
            >Quick Links</h1>
            <div
                className="h-[2px] bg-gray-500"    
            ></div>
            <div>
                <ul className={cardNormal}>
                    <li>Teacher's Login</li>
                    <li>Student's Login</li>
                    <li>Announcements</li>
                </ul>
            </div>
        </div>
    )
}

export default QuickLinks