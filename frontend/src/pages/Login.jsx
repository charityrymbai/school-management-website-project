

import MainContentWrappper from "../Wrappers/MainContentWrapper"
import LoginCard from "../components/LoginCard"


const Login = ()=>{
    return (
        <div className="flex justify-center">
            <MainContentWrappper>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                    <LoginCard 
                        gotopage="/Login/teacher"
                        text="Teacher's Login"
                        imageSrc="../../public/images/teacher.png"
                         />
                    <LoginCard 
                        gotopage="/Login/student"
                        text="Student's Login"
                        imageSrc="../../public/images/student.png"
                         />
                </div>
            </MainContentWrappper>
        </div>
    )
}

export default Login