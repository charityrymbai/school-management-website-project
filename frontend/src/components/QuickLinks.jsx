import { cardNormal, cardHeading } from "../pages/Styles/tailwind-styles"

import {useNavigate} from 'react-router-dom'


const QuickLinks = ()=>{

    const navigate = useNavigate()

    return (
        <div className="w-full h-fit p-2 text-center text-inter">
            <h1
                className={cardHeading}
            >Quick Links</h1>
            <div
                className="h-[2px] bg-gray-500"    
            ></div>
            <div>
                <div className={"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 "+ cardNormal}>
                    <div 
                        onClick={()=>{
                            navigate("/Login/teacher")
                    }}
                    >Teacher's Login</div>
                    <div
                        onClick={()=>{
                            navigate("/Login/student")
                    }}
                    >Student's Login</div>
                    <div>Announcements</div>
                </div>
            </div>
        </div>
    )
}

export default QuickLinks