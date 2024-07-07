
import MainContentWrappper from "../Wrappers/MainContentWrapper"
import ImageLink from "../components/ImageLink"

const Login = ()=>{
    return (
        <div className="flex justify-center">
            <MainContentWrappper>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
                    <ImageLink 
                        gotopage="/Login/teacherLogin"
                        imageSrc="../../public/images/teacher.png"
                    >Teacher's Login</ImageLink>
                    <ImageLink 
                        gotopage="/Login/student"
                        imageSrc="../../public/images/student.png"
                    >Student's Login</ImageLink>
                </div>
            </MainContentWrappper>
        </div>
    )
}

export default Login