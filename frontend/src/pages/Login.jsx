
import { Link } from "react-router-dom"

import MainContentWrappper from "../Wrappers/MainContentWrapper"
import ImageLink from "../components/ImageLink"

const Login = ()=>{

    return (
        <div className="flex justify-center">
            <MainContentWrappper>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <Link to={`${"Teacher"}`}>
                        <ImageLink 
                            imageSrc="../../public/images/teacher.png"
                        >Teacher's Login</ImageLink>
                        </Link>
                    <Link to={`${"Student"}`}>
                        <ImageLink 
                            imageSrc="../../public/images/student.png"
                        >Student's Login</ImageLink>
                        </Link>
                </div>
            </MainContentWrappper>
        </div>
    )
}

export default Login